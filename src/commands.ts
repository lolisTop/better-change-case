import { EOL } from 'os';
import * as vscode from 'vscode';
import { COMMAND_DEFINITIONS } from './map';
import { getGlobalState, setGlobalState } from './mixinFunc';
import intersection from 'lodash-es/intersection';
import map from 'lodash-es/map';
import filter from 'lodash-es/filter';
import includes from 'lodash-es/includes';

export const runCommand = (func: (...args: any[]) => any) => {
	const { activeTextEditor } = vscode.window;
	if (activeTextEditor) {
		const { document, selections, edit } = activeTextEditor;
		edit((editBuilder) => {
			selections.forEach((selection) => {
				// 选中项是否在同一行
				if (selection.isSingleLine) {
					const selectedText = document.getText(selection);
					// 将替换后的文本应用回文档
					editBuilder.replace(selection, func(selectedText));
				} else {
					const lines = document.getText(selection).split(EOL);
					const replacementLines = lines.map((x) => func(x));
					const replacementLinesToString = replacementLines.reduce((acc, v) => (!acc ? '' : acc + EOL) + v, '');
					editBuilder.replace(selection, replacementLinesToString);
				}
			});
		});
	}
};

export const changeCaseCommands = (context: vscode.ExtensionContext) => {
	const globalConfig = vscode.workspace.getConfiguration('better-change-case');
	const shortcutKeysToggleOptions = globalConfig.shortcutKeysToggleOptions as string[];
	// 过滤出已有配置
	const commonOptions = intersection(shortcutKeysToggleOptions, map(COMMAND_DEFINITIONS, 'label'));
	// 根据选项筛选方法集
	const commonCommands = map(commonOptions, (obj) => COMMAND_DEFINITIONS.find((x) => x.label === obj));
	const maxLength = commonCommands.length;
	const count = getGlobalState(context, 'count') as number;
	const func = commonCommands[count]?.func;
	if (func) {
		runCommand(func);
	}
	if ((getGlobalState(context, 'count') as number) >= maxLength - 1) {
		setGlobalState(context, 'count', 0);
	} else {
		setGlobalState(context, 'count', count + 1);
	}
};

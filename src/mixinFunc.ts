import * as vscode from 'vscode';
import { COMMAND_DEFINITIONS } from './map';
import { changeCaseCommands, runCommand } from './commands';

export function setGlobalState(context: vscode.ExtensionContext, key: string, value: string | number) {
	context.globalState.update(key, value);
}

export function getGlobalState(context: vscode.ExtensionContext, key: string) {
	return context.globalState.get(key);
}

export function setDefaultGlobalState(context: vscode.ExtensionContext) {
	setGlobalState(context, 'count', 0);
}

export function runCommonCommands(context: vscode.ExtensionContext) {
	COMMAND_DEFINITIONS.map((item) => {
		context.subscriptions.push(
			vscode.commands.registerCommand(`better-change-case.${item.label}`, () => {
				if (item.label === 'commands') {
					changeCaseCommands(context);
				} else {
					if (item.func) {
						runCommand(item.func);
					}
				}
				// The code you place here will be executed every time your command is executed
				// Display a message box to the user
				// vscode.window.showInformationMessage(`${item.description}!`);
			})
		);
	});
}

export function resetCountListener(context: vscode.ExtensionContext) {
	const selectionChangeListener = vscode.window.onDidChangeTextEditorSelection((event) => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const currentSelection = editor.selection;

			if (currentSelection.isEmpty) {
				console.log('Text selection is empty.');
				setGlobalState(context, 'count', 0);
			}
		}
	});

	context.subscriptions.push(selectionChangeListener);
}

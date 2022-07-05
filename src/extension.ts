// The module 'vscode' contains the VS Code extensibility constant
// Import the module and reference it with the alias vscode in constantour code below
import * as vscode from 'vscode';
import * as changeCaseCommands from './change-case-commands';

export function activate(context: vscode.ExtensionContext) {
	// vscode.commands.registerCommand('extension.changeCase.commands', changeCaseCommands);

	vscode.commands.registerCommand('extension.better-change-case.commands', changeCaseCommands.changeCaseCommands);
	vscode.commands.registerCommand('extension.better-change-case.camel', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.camel);
	});
	vscode.commands.registerCommand('extension.better-change-case.dot', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.dot);
	});
	vscode.commands.registerCommand('extension.better-change-case.kebab', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.kebab);
	});
	vscode.commands.registerCommand('extension.better-change-case.no', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.no);
	});
	vscode.commands.registerCommand('extension.better-change-case.param', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.param);
	});
	vscode.commands.registerCommand('extension.better-change-case.pascal', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.pascal);
	});
	vscode.commands.registerCommand('extension.better-change-case.path', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.path);
	});
	vscode.commands.registerCommand('extension.better-change-case.sentence', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.sentence);
	});
	vscode.commands.registerCommand('extension.better-change-case.snake', () => {
		changeCaseCommands.runCommand(changeCaseCommands.COMMAND_LABELS.snake);
	});

	// context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

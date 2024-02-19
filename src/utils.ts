import * as vscode from 'vscode';
export function resolvers(context: vscode.ExtensionContext, fn: (...args: any[]) => any) {
	return (...args: any[]) => {
		return fn(context, ...args);
	};
	// context.subscriptions.push(disposable);
}

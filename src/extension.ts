import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('funtick.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from funtick!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

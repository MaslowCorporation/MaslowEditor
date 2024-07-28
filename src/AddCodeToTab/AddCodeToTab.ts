import * as vscode from 'vscode';

export async function AddCodeToTab(code: string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No active editor');
        return;
    }

    const selection = editor.selection;

    await editor.edit(editBuilder => {
        if (selection.isEmpty) {
            const position = selection.active;
            editBuilder.insert(position, code);
        } else {
            editBuilder.replace(selection, code);
        }
    });
}

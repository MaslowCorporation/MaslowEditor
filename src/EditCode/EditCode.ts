import * as vscode from "vscode";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function EditCode() {
  return vscode.commands.registerCommand(
    "masloweditor972.EditCode",
    async () => {
      /**
       * Contains the currently active editor or undefined. 
       * The active editor is the one that currently has focus 
       * or, when none has focus, 
       * the one that has changed input most recently.
       */
      let editor = vscode.window.activeTextEditor;

      if (!editor) {
        // indicate that no tab is opened
        vscode.window.showErrorMessage("No file opened");
        return;
      }

      // the currently highlighted text, or null
      const selection = editor.selection;
      const text = editor.document.getText(selection);

      //
      await vscode.env.clipboard.writeText(text);

      let filePath = editor.document.uri.fsPath;
      let command = `npx maslow add-string-quick "${filePath}"`;

      let terminal = vscode.window.activeTerminal;

      if (!terminal) {
        terminal = vscode.window.createTerminal();
      }

      terminal.sendText(command);
      terminal.show();
    }
  );
}

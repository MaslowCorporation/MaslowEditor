import * as vscode from "vscode";
import MaslowGPTSDK from "maslow-gpt-sdk";

/**
 *
 * @returns Le trouveur de fantômes !
 */
export function getGoogleLoginDisposable() {
  return vscode.commands.registerCommand(
    "masloweditor972.googleLogin",
    async function () {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        // indicate that no tab is opened
        vscode.window.showErrorMessage("You need to have a tab opened, and also focus the cursor on a tab");
        return;
      }

      vscode.window.showInformationMessage("Login to Google from MaslowGPT, in the Terminal");

      let command = "npx maslow login";
      let terminal = vscode.window.activeTerminal;

      if (!terminal) {
        terminal = vscode.window.createTerminal();
      }

      terminal.sendText(command);
      terminal.show();
    }
  );
}

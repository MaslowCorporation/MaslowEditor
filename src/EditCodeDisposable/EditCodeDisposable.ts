import * as vscode from "vscode";
//import MaslowGPTSDK from "maslow-gpt-sdk";
import { getDataFromNPMMaslowJSON } from "../GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj";
import GetGPTCode from "../GetGPTCode/GetGPTCode";
import { AddCodeToTab } from "../AddCodeToTab/AddCodeToTab";

export function getEditCodeDisposable() {
  return vscode.commands.registerCommand(
    "masloweditor972.editCode",
    async () => {
      let editor = vscode.window.activeTextEditor;

      if (!editor) {
        // indicate that no tab is opened
        vscode.window.showErrorMessage("You need to have a tab opened, and also focus the cursor on a tab");
        return;
      }
      await editor.document.save();

      // the currently highlighted text, or null
      const selection = editor.selection;
      let text = null;

      const tab_is_focused = !!editor;
      const code_is_highlighted = !!editor && !!editor.selection && !editor.selection.isEmpty;

      // You can now use these variables or log them
      //console.log(`Tab is focused: ${tab_is_focused}`);
      //console.log(`Code is highlighted: ${code_is_highlighted}`);

      if (code_is_highlighted) {
        text = editor.document.getText(selection);
      } else if (tab_is_focused) {

      } else {
        return;
      }

      let userResponse = await vscode.window.showInputBox({
        placeHolder: 'Type what you need to do.'
      }) ?? "";


      if (userResponse.length > 0) {
        userResponse += ". Give me everything inside one block of code only.";

        if (text) {
          userResponse += `\n\n${text}`;
        }
      } else {
        vscode.window.showInformationMessage("You need to describe what you need, bro ;-)");

        return;
      }

      const model_chosen = getDataFromNPMMaslowJSON("ChooseAIModel");
      const apiKey = getDataFromNPMMaslowJSON("LatestAPIKey");

      // vscode.window.showInformationMessage("User needs:\n\n" + userResponse);

      vscode.window.showInformationMessage("Please wait... Your code is currently being generated.");

      const generated_code = await GetGPTCode({
        model_chosen,
        progressIntervalMs: 1000,
        prompt: userResponse,
        apiKey,
        onSuccess: (data) => {
          vscode.window.showInformationMessage("Code generated successfully:\n\n" + data.answer.codePart);
        },
        onProgress: (progress) => { },
        onError: (e) => {
          vscode.window.showInformationMessage("Oops... The code generation failed... Try again");
        },
      });


      if (generated_code) {
        const outputCode = generated_code.answer.codePart;

        await AddCodeToTab(outputCode);

        await editor.document.save();
      } else {
        return;
      }

    }


  );
}

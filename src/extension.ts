import * as vscode from "vscode";
import { EditCode } from "./EditCode/EditCode";
import { getFindJohnDoeDisposable } from "./GetFindJohnDoeDisposable/getFindJohnDoeDisposable";
import { getMoveCodeToFileDisposable } from "./GetMoveCodeToFileDisposable/getMoveCodeToFileDisposable";
import { getMoveRefugeesDisposable } from "./GetMoveRefugeesDisposable/getMoveRefugeesDisposable";

/**
 *
 * @param context
 *
 * MaslowEditor !
 *
 * Cet humble utiliaire à comme but de faciliter ta vie de
 * programmeur/créateur/rêveur/utopiste/révolutionnaire (pick one or more ;=)
 */
export function activate(context: vscode.ExtensionContext) {
  // crée le raccourci d'editeur de code style Copilot
  // (via ctrl+maj+i)
  let editCode = EditCode();

  // crée le raccourci de déplacement de fichiers via import
  // (via ctrl+maj+m)
  let moveRefugeesDisposable = getMoveRefugeesDisposable();

  // crée le raccourci de déplacement de code
  // (via ctrl+maj+f)
  let moveCodeToFileDisposable = getMoveCodeToFileDisposable();

  // crée le trouveur d'import introuvable
  // (via ctrl+maj+j)
  let findJohnDoeDisposable = getFindJohnDoeDisposable();

  context.subscriptions.push(
    editCode,
    moveRefugeesDisposable,
    moveCodeToFileDisposable,
    findJohnDoeDisposable
  );
}

export function deactivate() { }

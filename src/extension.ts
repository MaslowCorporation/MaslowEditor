import * as vscode from "vscode";
import { getEditCodeDisposable } from "./EditCodeDisposable/EditCodeDisposable";
import { getFindJohnDoeDisposable } from "./GetFindJohnDoeDisposable/getFindJohnDoeDisposable";
import { getMoveCodeToFileDisposable } from "./GetMoveCodeToFileDisposable/getMoveCodeToFileDisposable";
import { getMoveRefugeesDisposable } from "./GetMoveRefugeesDisposable/getMoveRefugeesDisposable";
import { getGoogleLoginDisposable } from "./GetGoogleLoginDisposable/getGoogleLoginDisposable";

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
  let editCodeDisposable = getEditCodeDisposable();

  // crée le raccourci de déplacement de fichiers via import
  // (via ctrl+maj+m)
  let moveRefugeesDisposable = getMoveRefugeesDisposable();

  // crée le raccourci de déplacement de code
  // (via ctrl+maj+f)
  let moveCodeToFileDisposable = getMoveCodeToFileDisposable();

  // crée le trouveur d'import introuvable
  // (via ctrl+maj+j)
  let findJohnDoeDisposable = getFindJohnDoeDisposable();

  // crée le loggeur via Google
  // (via ctrl+maj+l)
  let googleLoginDisposable = getGoogleLoginDisposable();

  context.subscriptions.push(
    editCodeDisposable,
    moveRefugeesDisposable,
    moveCodeToFileDisposable,
    findJohnDoeDisposable,
    googleLoginDisposable,
  );
}

export function deactivate() { }

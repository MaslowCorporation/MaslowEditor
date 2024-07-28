import * as path from "path";
import { getPathWithForwardSlashes } from "../GetPathWithForwardSlashes/getPathWithForwardSlashes";
import { GetMaslowGPTDataFolder } from "../GetMaslowGPTDataFolder/GetMaslowGPTDataFolder";
import { GetJSONObjectFromPath } from "../GetJSONObjectFromPath/GetJSONObjectFromPath";

function getDataFromNPMMaslowJSON(property: string) {
  try {
    // le path vers le fichier Maslow.json de cette fonction (si déja existant)
    const maslowJSONPath = getPathWithForwardSlashes(
      path.join(GetMaslowGPTDataFolder(), "Maslow.json")
    );

    // lobjet stocké dans maslow.json, si existant, ou null autrement.
    const maslowJSONObject = GetJSONObjectFromPath(maslowJSONPath);

    // le dernier choix fait précédemment, ou null si non existant
    if (maslowJSONObject !== null) {
      return maslowJSONObject[property];
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

function getNPMMaslowJSON() {
  try {
    // le path vers le fichier Maslow.json de cette fonction (si déja existant)
    const maslowJSONPath = getPathWithForwardSlashes(
      path.join(GetMaslowGPTDataFolder(), "Maslow.json")
    );

    // lobjet stocké dans maslow.json, si existant, ou null autrement.
    const maslowJSONObject = GetJSONObjectFromPath(maslowJSONPath);

    // le dernier choix fait précédemment, ou null si non existant
    if (maslowJSONObject !== null) {
      return maslowJSONObject;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

export { getDataFromNPMMaslowJSON, getNPMMaslowJSON };

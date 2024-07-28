/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import { GetFileContentsIfExisting } from "../GetFileContentsIfExisting/GetFileContentsIfExisting";

function GetJSONObjectFromPath(path: string) {
  try {
    const jsonString = GetFileContentsIfExisting(path) ?? "";
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
  } catch (error) {


    return null;
  }
}

export { GetJSONObjectFromPath };

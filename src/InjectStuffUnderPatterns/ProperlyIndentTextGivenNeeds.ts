import { Constants } from "./Constants";
import {
  ProperlyIndentFirstLine,
  ProperlyIndentString,
} from "./ProperlyIndentString";

export function ProperlyIndentTextGivenNeeds(
  indent: string | boolean,
  stuffUnderPattern: any,
  howManySpacesB4Pat: number
) {
  if (indent == Constants.only_first) {
    return ProperlyIndentFirstLine(
      `\n${stuffUnderPattern}`,
      howManySpacesB4Pat
    ).trimEnd();
  } else if (indent == true) {
    return ProperlyIndentString(
      `\n${stuffUnderPattern}`,
      howManySpacesB4Pat
    ).trimEnd();
  } else {
    return `\n${stuffUnderPattern}`;
  }
}

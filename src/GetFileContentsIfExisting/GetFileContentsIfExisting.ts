/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as iconv from "iconv-lite";
import * as jschardet from "jschardet";

function GetFileContentsIfExisting(filePath: string) {
  try {

    // Read the file buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Detect the encoding
    const detectedEncoding = jschardet.detect(fileBuffer);

    if (detectedEncoding && detectedEncoding.encoding) {
      const originalEncoding = detectedEncoding.encoding;
      // Convert the buffer to a UTF-8 encoded string
      const utf8EncodedString = iconv.decode(fileBuffer, originalEncoding);

      return utf8EncodedString; // Return the content as a string
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}

export { GetFileContentsIfExisting };

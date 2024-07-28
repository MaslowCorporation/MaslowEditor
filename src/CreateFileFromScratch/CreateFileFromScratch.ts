import * as fs from "fs";
import * as path from "path";


function CreateFileFromScratch(filePath: string, fileContent: string) {
  try {
    // Create all the missing folders in the file path
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    // Write the file content to the file
    fs.writeFileSync(filePath, fileContent);

    return 42; // Creation/overwrite successful
  } catch (error) {
    console.log(error);
    return null; // Creation/overwrite failed
  }
}

export { CreateFileFromScratch };

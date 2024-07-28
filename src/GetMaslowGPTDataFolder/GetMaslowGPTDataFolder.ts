import * as os from 'os';
import * as path from 'path';


export function GetMaslowGPTDataFolder() {
    // Get the home directory from the os module
    const homeDirectory = os.homedir();

    // Depending on the OS, the Documents folder might reside in a different subpath
    let documentsPath = '';
    switch (os.platform()) {
        case 'win32': // Windows
            documentsPath = path.join(homeDirectory, 'Documents');
            break;
        case 'darwin': // macOS
            documentsPath = path.join(homeDirectory, 'Documents');
            break;
        case 'linux': // Linux
            documentsPath = path.join(homeDirectory, 'Documents');
            break;
        default:
            throw new Error('Unsupported OS');
    }

    // Construct the complete path to the MaslowGPTData folder
    const maslowGPTDataPath = path.join(documentsPath, 'MaslowGPTData');

    return maslowGPTDataPath;
}


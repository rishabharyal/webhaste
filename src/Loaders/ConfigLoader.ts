import Application from "../application";
import fs from 'fs';

export default
class ConfigLoader {
    public static handle(application: Application) {
        let data = "";
        try {
            data = fs.readFileSync('../../config/', 'utf-8');
            
        } catch (err) {
        }

    }
}
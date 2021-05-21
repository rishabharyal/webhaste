import Application from "../application";
import fs from 'fs';

export default
class EnvLoader {
    public static handle(application: Application) {
        let data = "";
        try {
            data = fs.readFileSync('.env', 'utf-8');
        } catch (err) {
            console.log("Could not read the .env file. Please check if it exists and readable. All default settings will be applied.");
        }
        let envs = {};
        data.split("\n").forEach(item => {
            let exploded = item.split("=");
            // @ts-ignore
            envs[exploded[0]] = exploded[1];
        });

        application.set('env', envs);
    }
}
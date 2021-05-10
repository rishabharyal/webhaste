import Application from "../application";
import fs from 'fs';

export default
class EnvLoader {
    public static handle(application: Application) {
        let data = "";
        try {
            data = fs.readFileSync('.env', 'utf-8');
        } catch (err) {
            console.log(err)
        }

        let splitted = data.split("\n").map(item => {
            return item.split("=");
        });

        application.set('env', splitted);
    }
}
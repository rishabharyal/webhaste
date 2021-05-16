import Application from './src/application';
import ConfigLoader from './src/Loaders/ConfigLoader';
import EnvLoader from './src/Loaders/EnvLoader';
import Network from './src/Network/Network';

const app = new Application();

// assign env
EnvLoader.handle(app);

// assign configs
ConfigLoader.handle(app);

app.setKernel(new Network);

if (app.kernel === null) {
    throw "Kernel has not been set yet.";
}

declare global {
    namespace NodeJS {
        interface Global {
            app: Application;
        }
    }
}
global.app = app;

app.kernel.handle();

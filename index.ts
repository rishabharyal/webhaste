import Application from './src/application';
import ConfigLoader from './src/Loaders/ConfigLoader';
import EnvLoader from './src/Loaders/EnvLoader';
import Network from './src/Network/Network';

declare global {
    namespace NodeJS {
        interface Global {
            app: Application;
        }
    }
}

const app = new Application();
global.app = app;

// assign env
EnvLoader.handle(app);

// assign configs
ConfigLoader.handle(app);

app.setKernel(new Network);

if (app.kernel === null) {
    throw "Kernel has not been set yet.";
}

app.kernel.handle();

import Container from "./Container";
import Network from "./Network/Network";

export default
class Application extends Container {
    public version = '1.0';

    private isBootstraped = false;
    public kernel: Network | null = null;

    // Once application is locked, we can't perform actions in any config settings.
    private isLocked = false;

    protected providers = [];
    protected env = [];
    protected configs = [];

    public lock() {
        this.isLocked = true;
    }

    public getInstance() {
        return this.instance;
    }

    public setKernel(kernel: Network) {
        this.kernel = kernel;
    }

    private unLock() {
        this.isLocked = false;
    }

    public getConfigs(access: String = "") {
        if (access === "") return this.configs;
        
        // handle everything...
    }

    public getProviders() {
        return this.getConfigs('app.providers');
    }
}
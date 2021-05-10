export default
class Container {
    protected instance: any = {};

    public set(key: string, value: any): void {
        this.instance[key] = value;
    }

    public unset(key: string): void {
        this.instance[key] = undefined;
    }

    public get(key: string) {
        return this.instance[key];
    }
}
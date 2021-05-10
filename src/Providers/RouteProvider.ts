export default
class RouteProvider {
    public controllers = './src/Controllers/'
    public async boot() {
        await this.loadDefaultRoutes()
    }

    private async loadDefaultRoutes() {
        await import('../Network/RouteList')
    }
}
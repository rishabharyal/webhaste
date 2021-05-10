export default
class Route {
    private constructor() {}
    private static instance: Route
    protected routes: Array<Object> = []

    public get(path: String, handler: any) {
        return this.addRoute('GET', path, handler)
    }

    public post(path: String, handler: any) {
        return this.addRoute('POST', path, handler)
    }

    public static getInstance(): Route {
        if (!Route.instance) {
            Route.instance = new Route
        }

        return Route.instance
    }

    public addRoute(
        type: string = 'GET',
        path: String,
        handler: any,
        middleware: any = null
    ) {
        this.routes.push({
            type: type,
            path: path,
            target: handler,
            middleware: middleware
        })

        return this.routes[this.routes.length];
    }

}
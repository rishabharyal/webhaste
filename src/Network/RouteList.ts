import Route from "./Router";

export default
class RouteList {
    private router = Route.getInstance()

    public routes() {
        this.router.get('/hello', 'Handler');
    }
}
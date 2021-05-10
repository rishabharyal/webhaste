import RouteProvider from '../src/Providers/RouteProvider'

export default
class App {
    public config(): Object {
        return {
            "providers": [
                new RouteProvider()
            ],
            "organization": "Webhaste",
            "author": "Rishabh Aryal <rish.aryal@gmail.com>"
        }
    }
}
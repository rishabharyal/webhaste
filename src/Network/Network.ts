import Http from "./Http";

export default
class Network extends Http {
    /*
    * These middleware will be executed everytime when
    * there is request on the application.
    * */
    protected middlewares = [

    ];

    /*
    * These middleware can be used in routes
    * whenever you need them executed.
    * */
    protected namedMiddleware = {
        
    };

    protected validations = [

    ];
}
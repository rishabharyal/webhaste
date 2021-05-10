class Database {
    public config(): Object {
        return {
            'default_connection' : 'default',

            'connections' : {
                'default' : {
                    USERNAME: "root",
                    PASSWORD: "root@123",
                    DRIVER: "mysql",
                    DATABASE: "webhaste"
                }
            }
        };
    }
}
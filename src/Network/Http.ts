import { createServer, IncomingMessage, ServerResponse } from 'http';

export default class Http {
  public handle() {
    const port = 5000;

    const server = createServer((request: IncomingMessage, response: ServerResponse) => {
      console.log(global.app.getEnv());
      response.end('Hello world, ' + global.app.getEnv('APP_NAME'));
    });

    // @ts-ignore
    server.listen(port, (error: any) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Server listening on port ${port}`);
      }
    });
  }
}

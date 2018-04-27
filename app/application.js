
/*
  Do not import dotenv only
  import dotenv/config and not using dotenv.config()
  because in es6, import is processing before reading file
  https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
*/
import 'dotenv/config';
/*
  Important to import global config just after dotenv/config
*/
import 'initializers/global';

/*
  initializers:
    - prettyError: used to render custom pretty error
    - mongoose: create connection with db and load schemas
    - express: create express server, set routes and run server
*/
import pe from 'initializers/prettyError';
import Mongoose from 'initializers/mongoose';
import Express from 'initializers/express/express';

class Application {
  constructor() {
    this.pe = pe;

    this.mongoose = new Mongoose(global.env.mongo.addr, global.env.mongo.db);
    this.express = new Express();
  }

  async boot() {
    // Make connection with db
    await this.mongoose.createConnection();
    if (this.mongoose.error instanceof Error) {
      console.error(pe.render(this.mongoose.error));
      return;
    }

    // boot server
    this.express.boot();
  }
}

export default new Application();

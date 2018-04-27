import mongoose from 'mongoose';

export default class Mongoose {
  constructor(addr, db) {
    this.mongooseConnection = null;
    this.error = null;

    this.addr = addr;
    this.db = db;
  }

  async createConnection() {
    try {
      this.mongooseConnection = await mongoose.connect(`mongodb://${this.addr}/${this.db}`);
    } catch (err) {
      this.error = err;
    }
  }
}

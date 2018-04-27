/*
  This is the file to import just after dotenv/config
  it filled global object
*/

global.env = {
  __APP_VERSION__: process.env.npm_package_version,
  server: {
    port: process.env.SERVER_PORT,
  },
  mongo: {
    addr: process.env.MONGO_ADDR,
    db: process.env.MONGO_DB,
  },

  key: {
    jwtSecret: process.env.JWT_SECRET,
    bubsnagApiKey: process.env.BUGSNAG_API_KEY,
  },

  nodeEnv: process.env.NODE_ENV || 'development',
  __DEV__: process.env.NODE_ENV == 'development',
};

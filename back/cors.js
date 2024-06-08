const cors = require('cors');

const corsOptions = {
  origin: '*', // Permettre toutes les origines
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Permettre tous les types de requêtes HTTP
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

module.exports = cors(corsOptions);
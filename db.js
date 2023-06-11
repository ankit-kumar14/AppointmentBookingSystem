const admin = require('firebase-admin');
const firebaseConfig = require('./config/fireBaseConfig');

const db = admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
});

module.exports = db;
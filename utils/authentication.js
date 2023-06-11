const admin = require('firebase-admin');

const authenticate = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization;
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;

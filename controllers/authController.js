const admin = require('../db');
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res
      .status(200)
      .json({
        message: "User registered successfully",
        userId: userRecord.uid,
      });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRecord = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(userRecord.uid);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};

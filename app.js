require('dotenv').config();
const express = require('express');
const appointmentsRoutes = require('./routes/appointmentsRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.use('/appointments', appointmentsRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

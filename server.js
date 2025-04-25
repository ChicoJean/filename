require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const produtosRoutes = require('./routes/produtos');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/produtos', produtosRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error('Erro ao conectar MongoDB:', err));

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

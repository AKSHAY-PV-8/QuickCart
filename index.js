const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(morgan('dev')); 


const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000) + 10,
  category: ['electronics', 'clothing', 'books'][i % 3],
}));


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(5000, () => console.log('Server running on port 5000'));
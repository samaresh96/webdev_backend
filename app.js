import express from 'express';
import cors from 'cors';
import formRoutes from './routes/formRoutes.js';

const app = express();

app.use(cors());

app.use(cors({ origin: 'http://65.1.100.7/' })); // replace with your frontend URL

app.use(express.json());

app.use('/api', formRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.post('/api/submit', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  
  // Perform your logic here (e.g., save data to the database)

  res.json({ message: 'Data submitted successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

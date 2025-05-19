import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! This is the root route.');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is some data from /api/data', timestamp: new Date() });
});

app.listen(port, () => {
    console.log(`Server listening at http://:${port}`);
});
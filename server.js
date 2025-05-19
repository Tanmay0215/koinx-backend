import express from 'express';
import cors from 'cors';

import { holdings, capitalGains } from './dummyData.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("check /api/v1/holdings and /api/v1/capital-gains");
})

app.get('/api/v1/holdings', (req, res) => {
    res.json(holdings)
});

app.get('/api/v1/capital-gains', (req, res) => {
    res.json(capitalGains);
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
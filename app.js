import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hi wurld');
})


app.listen(process.env.PORT, () => {
    console.log(`running express on port ${process.env.PORT}`);
});
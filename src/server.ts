import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import "dotenv/config";

interface IEnv{
    PORT: number;
}
const ENV = (process.env as any) as IEnv; 

const app = express();


app.use(cors({origin: "*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.status(200).json({message: "Hello World"});
});

app.listen(ENV.PORT || 3001, () => {
    console.log(`Server is running on port ${ENV.PORT || 3001}`);
})

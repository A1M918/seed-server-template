import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
console.log("asdasd");
app.get('/', (req, res) => {
    res.send("Working no");
});
app.listen(2500);

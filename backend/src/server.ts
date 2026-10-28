import express, {type Express} from "express";

const app : Express = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello from Node.js backend!" });
})

app.listen(8000, () => {
    console.log('server listening on port 8000')
})
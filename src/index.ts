// src/index.ts
import express from 'express';

const app: express.Application = express();
const port = 3000;

// app.use(express.text());

var path = __dirname + '/views/';
var pubpath = '/Users/carolinewester/development/ajmac/inventory/public'
app.use(express.static(pubpath));

console.log("this is the path:  " + path)
console.log("public directory: "  + pubpath)
console.log("this is the directory:  " + __dirname)

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// Homepage
app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path + 'index.html');
});

// GET
app.get('/get', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-get-header", "get-header-value").send("get-response-from-compute");
});

//POST
app.post('/post', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-post-header", "post-header-value").send(req.body.toString());
});

//PUT
app.put('/put', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-put-header", "put-header-value").send(req.body.toString());
});

//PATCH
app.patch('/patch', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-patch-header", "patch-header-value").send(req.body.toString());
});

// Delete
app.delete('/delete', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-delete-header", "delete-header-value").send();
});

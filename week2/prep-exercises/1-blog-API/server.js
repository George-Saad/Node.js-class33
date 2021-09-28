const express = require('express')
const app = express();
const fs = require("fs");
const path = require('path');

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/blogs/:title', (req, res) => {

  const title = req.params.title;
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.status(200).send(post);
  }
  else {
    res.status(404).send('This post does not exist!');
  }
})

// blogs

app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok');
});

app.patch('/posts/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    const content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    res.status(404).send('This post does not exist!');
  }
});

app.delete('/blogs/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end('ok');
  }
  else {
    res.status(404).send('This post does not exist!');
  }
});

app.listen(3000);
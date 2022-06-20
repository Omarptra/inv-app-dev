const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, '../dist')));
const port = process.env.PORT || 3000;
console.log('App starting at 192.168.0.1:3000');
app.listen(port);
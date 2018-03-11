const express = require('express');

const app = express();
const port = process.env.PORT || 3009;

app.use(express.static('dist'));
app.get('/', (request, response) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Gentium+Basic:400,400i,700|Marcellus+SC&subset=latin-ext');      
          @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,700');
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script src="./app.bundle.js"></script>
      </body>
    </html>`,
  );
});


app.listen(port, () => {
  console.log('Example app listening at localhost:%s', port);
});

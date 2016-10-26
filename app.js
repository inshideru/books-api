const express = require('express');
const config = require('./config/config');
const datasource = require('./config/datasource');
const app = express();
const bodyParser = require('body-parser');
app.config = config;
app.datasource = datasource(app);
const Books = app.datasource.models.Books;

app.set('port', 7000);
app.use(bodyParser.json());

app.route('/books')
    .get((req, res) => {
      Books
            .findAll({})
            .then((result) => {
              res.json(result);
            })
            .catch((error) => {
              res.sendStatus(412);
            });
    })
    .post((req, res) => {
      Books
            .create(req.body)
            .then(result => res.json(result))
            .catch((error) => {
              res.sendStatus(412);
            });
    });

app.route('/books/:id')
    .get((req, res) => {
      Books
            .findOne({
              where: {
                id: req.params.id,
              },
            })
            .then((result) => {
              res.json(result);
            })
            .catch((error) => {
              res.sendStatus(412);
            });
    })
    .put((req, res) => {
      Books
            .update(req.body, {
              where: {
                id: req.params.id,
              },
            })
            .then((result) => {
              res.json(result);
            })
            .catch((error) => {
              res.sendStatus(412);
            });
    })
    .delete((req, res) => {
      Books
            .destroy({
              where: {
                id: req.params.id,
              },
            })
            .then((result) => {
              res.sendStatus(204);
            })
            .catch((error) => {
              res.sendStatus(412);
            });
    });

module.exports = app;

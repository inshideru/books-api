const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`app is running on port ${app.get('port')}`);
});

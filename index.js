const express = require('express');
const app = express();

app.listen(3000, function(res, req) {
	console.log('JeTuIlNousVousIls started !');
});

app.use('/', require('./routes'));
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ olarr: 'mundo' });
});

const PORT = process.env.PORT || 8585;
app.listen(PORT);
console.log('aplicação de pé na porta: ' + PORT);

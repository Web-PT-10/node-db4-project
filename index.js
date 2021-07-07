const server = require('./server');
const PORT = process.env.port || 8080;

server.listen(PORT, () => {
	console.log(`THIS SHIT IS ON @ http://localhost:${PORT}`);
});

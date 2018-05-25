const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/db/db.json');
const db = require('./db/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
    if (req.method === 'GET' && req.originalUrl === '/users/count') {
        const count = db.users.length;
        console.log(count);
        res.status(200);
		res.json({'count': count});
    }
    else {
        next();
    }
});

server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running')
});
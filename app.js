
const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const compression = require('compression');
const express = require('express');

process.on("unhandledRejection", (error) => {
    console.error(error); // This prints error with stack included (as for normal errors)
    // throw error; // Following best practices re-throw error and let the process exit with error code
});

if (cluster.isMaster) {

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {

        cluster.fork();
    });

} else {



    const app = express();
    const httpServer = http.createServer(app);
    app.use(compression());
    app.use(function (req, res, next) {
        res.removeHeader("X-Powered-By");
        next();
    });
    app.disable('x-powered-by');
    app.disable('X-Powered-By');
    app.use('/', express.static('./'));


    const path = __dirname + '/';

    app.get('*', function (req, res) {
        console.log('receiving')
        res.sendFile(path + "index.html");
    });



    app.use('/api/healthcheck', function (request, response) {
        response.send(JSON.stringify({
            message: 'running'
        }))
    })

    httpServer.listen(80, function () {
        console.log('server is listening on port 80')
    });


}
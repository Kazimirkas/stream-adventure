const http = require('http')
const through = require('through');

function transform(buf) {
    this.queue(buf.toString().toUpperCase());
}

const handler = (req, res) => {
    if(req.method !== 'POST') {
        res.end('POST me something');
        return;
    }

    req.pipe(through(transform)).pipe(res).res;
}

http.createServer(handler).listen(process.argv[2]);

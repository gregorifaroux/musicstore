import http from 'http';
import { promises as fs, readFileSync } from 'fs';
import path from 'path';
import url from 'url';
import logger from './logger';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();
const hello = 'hello world!!';
logger.info(hello);
const filenameIn = './txt/input.txt';

fs.readFile(filenameIn, 'utf-8')
  .then((data) => {
    logger.info(`File content: ${data}`);
    const textOut = `This is what we read: ${data}\nCreated on ${Date.now()}`;
    fs.writeFile('./txt/output.txt', textOut);
  })
  .catch((err) => {
    logger.error(`Error for ${filenameIn}: ${err}`);
  });
logger.info(`Reading ${filenameIn} ...`);

const data = readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((request, response) => {
  // Set CORS headers
  //  logger.warn(`${JSON.stringify(request.header)}`);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  response.setHeader('Access-Control-Allow-Headers', '*');
  if (request.method === 'OPTIONS') {
    response.writeHead(200);
    response.end();
    return;
  }

  const { pathname, query } = url.parse(request.url, true);
  //
  switch (pathname) {
    case '/product':
      response.writeHead(200, {
        'Content-type': 'application/json',
      });
      if (dataObj[query.id]) {
        response.end(JSON.stringify(dataObj[query.id]));
      } else {
        response.end("{error: 'product not found'}");
      }
      break;
    case '/overview':
    case '/':
      response.end('An overview');
      break;
    case '/api':
      response.writeHead(200, {
        'Content-type': 'application/json',
      });
      response.end(data);
      break;
    default:
      response.writeHead(404, {
        'Content-type': 'text/html',
      });
      response.end('<h1>Page not found!</h1>');
      break;
  }
});

// SERVER
const PORT = 8000;
server.listen(PORT, '127.0.0.1', () => {
  logger.info(`Listening to requests on port ${PORT}`);
});

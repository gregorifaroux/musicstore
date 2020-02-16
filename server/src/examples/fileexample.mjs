import { promises as fs } from 'fs';
import logger from './logger';

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

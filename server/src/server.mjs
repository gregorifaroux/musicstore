import dotenv from 'dotenv';
import app from './app.mjs';
import logger from './logger.mjs';

const result = dotenv.config({ path: './config.env' });
if (result.error) {
  throw result.error;
}
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`Listening to requests on port ${PORT}`);
});

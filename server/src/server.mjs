import dotenv from 'dotenv';
import app from './app';
import logger from './logger';

const result = dotenv.config({ path: './config.env' });
if (result.error) {
  throw result.error;
}
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`Listening to requests on port ${PORT}`);
});

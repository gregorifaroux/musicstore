import app from './app';
import logger from './logger';

const PORT = 8000;
app.listen(PORT, () => {
  logger.info(`Listening to requests on port ${PORT}`);
});

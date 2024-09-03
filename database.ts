import { winstonLogger } from '@jahidhiron/jobber-shared';
import { config } from '@order/config';
import mongoose from 'mongoose';

const log = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'orderDatabaseServer', 'debug');

export const databaseConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(`${config.DATABASE_URL}`);
    log.info('Order service successfully connected to database.');
  } catch (error) {
    log.log('error', 'OrderService databaseConnection() method error:', error);
  }
};

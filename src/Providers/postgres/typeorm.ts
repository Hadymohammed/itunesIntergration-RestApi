import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';
import { options } from 'yargs';

dotenvConfig({ path: '.env' });
const config = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: `${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: ['**/Entities/*.entity.js'],
  migrations: ["**/migrations/*.js"],
  autoLoadEntities: true,
  synchronize: false,
  rejectUnauthorized: false,
  ssl:process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
  cli: {
    migrationsDir: "migrations",
    entitiesDir : "Entities"
  }
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);
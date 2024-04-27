import { Module } from '@nestjs/common';
// import { MediaModule } from './media.module/media.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import dataSource from './Providers/postgres/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './Providers/postgres/typeorm';
// import { configService } from './Providers/postgres/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

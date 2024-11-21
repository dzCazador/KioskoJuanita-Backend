import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { SellsModule } from './sells/sells.module';


import {Product} from './products/products.entity';
import { Sell } from './sells/sell.entity';
import { SellItem } from './sells/sell-item.entity';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}), // Importante para usar la variable de entorno con nestjs
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product,Sell, SellItem], // Importante para que NestJS pueda leer los entidades desde los archivos.js generados
      synchronize: true, // Importante para que NestJS sincronice la base de datos con las entidades
      logging: false, // Habilita el registro de consultas
    }), ProductsModule, SellsModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

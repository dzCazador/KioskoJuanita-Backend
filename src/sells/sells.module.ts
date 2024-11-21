import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellsService } from './sells.service';
import { SellsController } from './sells.controller';
import { Sell } from './sell.entity';
import { SellItem } from './sell-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sell, SellItem])],
  providers: [SellsService],
  controllers: [SellsController],
})
export class SellsModule {}

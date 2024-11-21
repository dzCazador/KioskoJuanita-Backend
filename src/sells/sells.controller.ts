import { Controller, Post, Body, Get } from '@nestjs/common';
import { SellsService } from './sells.service';

@Controller('sells')
export class SellsController {
  constructor(private readonly sellsService: SellsService) {}

  @Post()
  async createSell(
    @Body() createSellDto: { fechaHora: string, items: { nombreProducto: string, cantidad: number, precioUnitario: number }[] },
  ) {
    return this.sellsService.createSell(createSellDto.fechaHora, createSellDto.items);
  }

  @Get()
  async getSells() {
    return this.sellsService.getSells();
  }
}

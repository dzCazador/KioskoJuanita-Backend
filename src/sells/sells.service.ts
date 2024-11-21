import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sell } from './sell.entity';
import { SellItem } from './sell-item.entity';

@Injectable()
export class SellsService {
  constructor(
    @InjectRepository(Sell)
    private sellRepository: Repository<Sell>,
    @InjectRepository(SellItem)
    private sellItemRepository: Repository<SellItem>,
  ) {}

  async createSell(fechaHora: string, items: { nombreProducto: string, cantidad: number, precioUnitario: number }[]): Promise<Sell> {
    const total = items.reduce((acc, item) => acc + item.precioUnitario * item.cantidad, 0);

    // Crear la venta
    const sell = this.sellRepository.create({
      fechaHora,
      total: parseFloat(total.toFixed(2)),
    });

    // Guardar la venta en la base de datos
    const savedSell = await this.sellRepository.save(sell);

    // Crear y guardar los items de la venta
    const sellItems = items.map(item => this.sellItemRepository.create({
      sell: savedSell,
      nombreProducto: item.nombreProducto,
      cantidad: item.cantidad,
      precioUnitario: item.precioUnitario,
      total: item.precioUnitario * item.cantidad,
    }));

    await this.sellItemRepository.save(sellItems);

    return savedSell;
  }

  async getSells(): Promise<Sell[]> {
    return this.sellRepository.find({ relations: ['items'] });
  }
}

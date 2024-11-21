"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sell_entity_1 = require("./sell.entity");
const sell_item_entity_1 = require("./sell-item.entity");
let SellsService = class SellsService {
    constructor(sellRepository, sellItemRepository) {
        this.sellRepository = sellRepository;
        this.sellItemRepository = sellItemRepository;
    }
    async createSell(fechaHora, items) {
        const total = items.reduce((acc, item) => acc + item.precioUnitario * item.cantidad, 0);
        const sell = this.sellRepository.create({
            fechaHora,
            total: parseFloat(total.toFixed(2)),
        });
        const savedSell = await this.sellRepository.save(sell);
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
    async getSells() {
        return this.sellRepository.find({ relations: ['items'] });
    }
};
exports.SellsService = SellsService;
exports.SellsService = SellsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sell_entity_1.Sell)),
    __param(1, (0, typeorm_1.InjectRepository)(sell_item_entity_1.SellItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SellsService);
//# sourceMappingURL=sells.service.js.map
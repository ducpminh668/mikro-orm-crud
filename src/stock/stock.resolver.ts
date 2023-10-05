import { Query, Resolver } from '@nestjs/graphql';
import { StocksService } from './stock.service';

@Resolver('Stock')
export class StocksResolver {
  constructor(private readonly stocksService: StocksService) {}

  @Query('Stocks')
  async getStocks() {
    return this.stocksService.findAll();
  }
}

import { Module } from '@nestjs/common';
import { StocksService } from './stock.service';

@Module({
  imports: [],
  providers: [StocksService],
})
export class StocksModule {}

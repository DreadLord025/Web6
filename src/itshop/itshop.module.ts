import { Module } from '@nestjs/common';
import { ITShopService } from './itshop.service';
import { ITShopController } from './itshop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ITShop } from './entities/itshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ITShop])],
  controllers: [ITShopController],
  providers: [ITShopService],
})
export class ITShopModule {}

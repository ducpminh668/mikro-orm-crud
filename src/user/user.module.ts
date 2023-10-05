import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';

@Module({
  controllers: [],
  imports: [MikroOrmModule.forFeature({ entities: [User] })],
  providers: [],
})
export class UserModule {}

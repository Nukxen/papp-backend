import { Module } from '@nestjs/common';
import { UserController } from 'src/user-data/user.controller';
import { UserService } from 'src/user-data/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class ProductModule {}

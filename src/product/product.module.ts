import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadsModules } from 'uploads/uploads.module';
@Module({
  imports: [TypeOrmModule.forFeature([Product]), UploadsModules],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductData, ProductDataUpdate } from 'src/dto/product-data.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('addProduct')
  addProduct(@Body() data: ProductData) {
    try {
      this.productService.addProduct(data);
      return { mensage: 'Produto adicionado com sucesso!' };
    } catch (e) {
      throw e;
    }
  }

  @Post('deleteProduct')
  deleteProduct(@Body() data: ProductDataUpdate) {
    try {
      this.productService.removeProduct(data);
    } catch (e) {
      throw e;
    }
  }
}

import { Injectable } from '@nestjs/common';
import { ProductData, ProductDataUpdate } from '../dto/product-data.dto';
import { Code } from '../scripts/id-gen';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly db: PrismaService,
    private readonly code: Code,
  ) {
    this.code = new Code();
    this.db = new PrismaService();
  }

  async addProduct(data: ProductData) {
    let preCode;
    let findDB;
    do {
      preCode = this.code.genUUID();
      findDB = await this.db.product.findFirst({
        where: {
          id: preCode,
        },
      });
    } while (findDB != null);
    data.id = preCode;
    await this.db.product.create({ data: data });

    console.log('Produto criado!');
  }
  async removeProduct(data: ProductDataUpdate) {
    if (
      await this.db.product.findFirst({
        where: {
          id: data.id,
        },
      })
    ) {
      await this.db.product.delete({
        where: {
          id: data.id,
        },
      });
      console.log('delCode:', data.id);
    } else {
      console.log('Erro, dados invalidos!');
    }
  }
  updateProduct(data: ProductDataUpdate) {
    console.log('updCode', data);
  }
  registerSell() {
    let preCode = this.code.getID();
    console.log('regCode', preCode);
  }
}

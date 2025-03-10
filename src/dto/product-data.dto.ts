export class ProductData {
  id: string;
  name: string;
  value: number;
  tag: string[];
}
export class ProductDataUpdate {
  id: string;
  name?: string;
  value?: number;
  tag?: string[];
}
export class ProductDataAdd {
  id: string;
  name: string;
  value: number;
  tag?: string[];
}

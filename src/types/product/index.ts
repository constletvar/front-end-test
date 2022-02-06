interface Installments {
  quantity: number;
  value: number;
}

export interface Product {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: Installments[];

}
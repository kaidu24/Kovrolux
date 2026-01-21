
export type Language = 'ru' | 'kg';

export interface Translation {
  navHome: string;
  navServices: string;
  navPrices: string;
  navOrderStatus: string;
  navContacts: string;
  heroTitle: string;
  heroBtn: string;
  calcTitle: string;
  width: string;
  length: string;
  result: string;
  processTitle: string;
  whyTitle: string;
  pricesTitle: string;
  reviewsTitle: string;
  footerTitle: string;
  orderBtn: string;
  orderStatusTitle: string;
}

export interface Order {
  id: string;
  phone: string;
  status: string;
  date: string;
  pickupTime: string;
  address: string;
}

export enum OrderStatusType {
  PENDING = 'Принят',
  WASHING = 'В стирке',
  DRYING = 'В сушке',
  DELIVERING = 'Доставка',
  COMPLETED = 'Готов'
}

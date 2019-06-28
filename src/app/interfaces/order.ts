
import { IShopingCardItem } from './shoping-card-item';

export interface IOrder {
    orderId?: string
    userId: string
    total: number
    products?: IShopingCardItem[]
}

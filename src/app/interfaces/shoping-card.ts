import { IShopingCardItem } from './shoping-card-item';

export interface ShopingCard {
    userId: string
    items?: IShopingCardItem[]
}

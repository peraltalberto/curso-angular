import { IOrder } from './order';

export interface IUser {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    order?: IOrder[]
}

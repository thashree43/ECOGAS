import { Types } from "mongoose";
import { User, BookData, OrderData } from "../../../entities";
import { IagentData, IBookData, IOrderData, IUserData } from "../../db";

export interface IUserRepository {
  getall(): Promise<IUserData[] | null>;
  getbyId(id: string): Promise<IUserData | null>;
  updatestatus(id: string, data: object): Promise<IUserData | null>;
  findbyEmail(email: string): Promise<IUserData | null>;
  saveuser(user: User): Promise<IUserData>;
  findByGoogleId(googleId: string): Promise<IUserData | null>;
  updatePassword(email: string, password: string): Promise<boolean>;
  savebook(book: BookData): Promise<IBookData>;
  linkbooktouser(userId: string, bookId: Types.ObjectId): Promise<void>;
  getbookbyid(userId: Types.ObjectId): Promise<IUserData | null>;
  deletebookbyid(bookId: Types.ObjectId | string): Promise<IBookData | null>;
  createOrder(selectedgasId:Types.ObjectId | string,order: Partial<OrderData>): Promise<IOrderData>;
  linkOrderToUser(
    userId: string | Types.ObjectId,
    orderId: string | Types.ObjectId
  ): Promise<IUserData | null>;
  linkOrderToProvider(
    selectedProviderId: string | Types.ObjectId,
    orderId: string | Types.ObjectId
  ): Promise<IagentData | null>;
  listorder(id:Types.ObjectId | string):Promise<IUserData>
}
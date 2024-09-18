import { Dispatch } from "react";
import { Categories, CategoryObj, Data, DataObj } from "..";
export enum DataActionTypes {
  addData = "ADD_DATA",
  addCategories = "ADD_CATEGORIES",
}

export interface DataState {
  data: DataObj | CategoryObj | null;
}
export interface DataAction {
  type: string;
  payload: DataObj | CategoryObj | null;
}
// export interface CategoryAction {
//   type: string;
//   payload: Categories;
// }

export interface ContextDataValue<T> {
  data?: T | null;
  dataDispatch?: Dispatch<DataAction>;
}

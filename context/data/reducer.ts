import {
  DataAction,
  DataActionTypes,
  DataState,
} from "@/types/data/contextTypes";

export const initialDataState: DataState = {
  data: null,
};

export function dataReducer(dataState: DataState, dataAction: DataAction) {
  switch (dataAction.type) {
    case DataActionTypes.addData:
      return {
        ...dataState,
        data: dataAction.payload,
      };
    case DataActionTypes.addCategories:
      return {
        ...dataState,
        data: dataAction.payload,
      };
    default:
      return dataState;
  }
}

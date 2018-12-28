import { Action } from '@ngrx/store';

export enum DataActionTypes {
  LoadDatas = '[Data] Load Datas'
}

export class LoadDatas implements Action {
  readonly type = DataActionTypes.LoadDatas;
}

export type DataActions = LoadDatas;

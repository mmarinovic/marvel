import { Action } from 'redux';

export interface IPlainAction<T> extends Action<T> {}

export interface IAction<T, P> extends IPlainAction<T>{
    payload: P;
}

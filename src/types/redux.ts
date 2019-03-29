import { Action } from 'redux';

export interface IPlainAction<T> extends Action<T>{
}

export interface IPayloadHolder<T> {
    payload: T;
}

export interface IAction<T, P> extends IPlainAction<T>, IPayloadHolder<P> {}

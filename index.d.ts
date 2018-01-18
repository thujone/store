declare namespace store {
  export const local: StoreAPI;
  export const session: StoreAPI;

  export function area(id: string, area: Storage): StoreAPI;
  export function set(key: any, data: any, overwrite?: boolean): any;
  export function setAll(data: Object, overwrite?: boolean): StoredData;
  export function get(key: any, alt?: any): any;
  export function getAll(): StoredData;
  export function transact(key: any, fn: (data: any) => any, alt?: any): StoreAPI;
  export function clear(): StoreAPI;
  export function has(key: any): boolean;
  export function remove(key: any): any;
  export function each(callback: (key: any, data: any) => false | any): StoreAPI;
  export function keys(): string[];
  export function size(): number;
  export function clearAll(): StoreAPI;
  export function isFake(): boolean;
  export function namespace(namespace: string, noSession?: true): StoreAPI;

  export interface StoreAPI {
    clear(): StoreAPI;
    clearAll(): StoreAPI;
    each(callback: (key: any, data: any) => false | any): StoreAPI;
    get(key: any, alt?: any): any;
    getAll(): StoredData;
    has(key: any): boolean;
    isFake(): boolean;
    keys(): string[];
    namespace(namespace: string, noSession?: true): StoreAPI;
    remove(key: any): any;
    set(key: any, data: any, overwrite?: boolean): any;
    setAll(data: Object, overwrite?: boolean): StoredData;
    size(): number;
    transact(key: any, fn: (data: any) => any, alt?: any): StoreAPI;
  }

  export interface StoredData {
    [key: string]: any;
  }

  export interface Storage {
    length: number;
    clear(): void;
    getItem(key: string): string;
    key(index: number): string;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
  }
}

declare function store(key: any, fn: (data: any) => any, alt?: any): store.StoreAPI
declare function store(key: any, data: any): any
declare function store(clearIfFalsy: false | 0): store.StoreAPI
declare function store(key: any): any
declare function store(obj: Object): store.StoredData
declare function store(): store.StoredData

export = store;

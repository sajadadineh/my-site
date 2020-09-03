import MoveableGroup from "./MoveableGroup";
import { Able } from "./types";
import MoveableManager from "./MoveableManager";
import { IObject } from "@daybrush/utils";
export declare function triggerChildDragger(moveable: MoveableGroup, able: Able, type: string, delta: number[], e: any, isConvert: boolean): any[];
export declare function triggerChildAble<T extends Able>(moveable: MoveableGroup, able: T, type: keyof T & string, datas: IObject<any>, eachEvent: ((movebale: MoveableManager, datas: IObject<any>) => any) | IObject<any>, callback?: (moveable: MoveableManager<any>, datas: IObject<any>, result: any, index: number) => any): any[];

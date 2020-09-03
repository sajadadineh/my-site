/// <reference types="react" />
import MoveableManager from "../MoveableManager";
import { DraggableProps, OnDrag, OnDragGroup, OnDragStart, DraggableState, Renderer } from "../types";
import MoveableGroup from "../MoveableGroup";
import { IObject } from "@daybrush/utils";
declare const _default: {
    name: string;
    props: {
        draggable: BooleanConstructor;
        throttleDrag: NumberConstructor;
        throttleDragRotate: NumberConstructor;
    };
    render(moveable: MoveableManager<DraggableProps, DraggableState>, React: Renderer): JSX.Element | undefined;
    dragStart(moveable: MoveableManager<DraggableProps, any>, e: any): false | OnDragStart;
    drag(moveable: MoveableManager<DraggableProps, any>, e: any): OnDrag | undefined;
    dragEnd(moveable: MoveableManager<DraggableProps, DraggableState>, e: any): any;
    dragGroupStart(moveable: MoveableGroup, e: any): false | OnDragStart;
    dragGroup(moveable: MoveableGroup, e: any): OnDragGroup | undefined;
    dragGroupEnd(moveable: MoveableGroup, e: any): any;
    request(moveable: MoveableManager<any, any>): {
        isControl: boolean;
        requestStart(e: IObject<any>): {
            datas: {};
        };
        request(e: IObject<any>): {
            datas: {};
            distX: number;
            distY: number;
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
    unset(moveable: any): void;
};
export default _default;

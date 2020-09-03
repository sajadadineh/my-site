import { ResizableProps, OnResizeGroup, Renderer, DraggableProps, OnResizeStart, SnappableState, OnResize } from "../types";
import MoveableManager from "../MoveableManager";
import MoveableGroup from "../MoveableGroup";
import { directionCondition } from "./utils";
import { IObject } from "@daybrush/utils";
declare const _default: {
    name: string;
    ableGroup: string;
    updateRect: boolean;
    canPinch: boolean;
    props: {
        resizable: BooleanConstructor;
        throttleResize: NumberConstructor;
        renderDirections: ArrayConstructor;
        baseDirection: ArrayConstructor;
        keepRatio: BooleanConstructor;
    };
    render(moveable: MoveableManager<Partial<ResizableProps>, {}>, React: Renderer): any[] | undefined;
    dragControlCondition: typeof directionCondition;
    dragControlStart(moveable: MoveableManager<ResizableProps & DraggableProps, SnappableState>, e: any): false | OnResizeStart;
    dragControl(moveable: MoveableManager<ResizableProps & DraggableProps, {}>, e: any): OnResize | undefined;
    dragControlAfter(moveable: MoveableManager<ResizableProps & DraggableProps, {}>, e: any): true | undefined;
    dragControlEnd(moveable: MoveableManager<ResizableProps & DraggableProps, {}>, e: any): any;
    dragGroupControlCondition: typeof directionCondition;
    dragGroupControlStart(moveable: MoveableGroup, e: any): false | OnResizeStart;
    dragGroupControl(moveable: MoveableGroup, e: any): OnResizeGroup | undefined;
    dragGroupControlEnd(moveable: MoveableGroup, e: any): any;
    request(moveable: MoveableManager<any, {}>): {
        isControl: boolean;
        requestStart(e: IObject<any>): {
            datas: {};
            parentDirection: any;
        };
        request(e: IObject<any>): {
            datas: {};
            parentDist: number[];
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
};
export default _default;

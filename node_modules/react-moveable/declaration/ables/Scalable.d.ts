import MoveableManager from "../MoveableManager";
import { ScalableProps, ResizableProps, OnScaleGroup, Renderer, OnScaleGroupStart, DraggableProps, SnappableState, GroupableProps, OnScaleStart, OnScale } from "../types";
import MoveableGroup from "../MoveableGroup";
import { IObject } from "@daybrush/utils";
import { directionCondition } from "./utils";
declare const _default: {
    name: string;
    ableGroup: string;
    canPinch: boolean;
    props: {
        scalable: BooleanConstructor;
        throttleScale: NumberConstructor;
        renderDirections: StringConstructor;
        keepRatio: BooleanConstructor;
    };
    render(moveable: MoveableManager<Partial<ResizableProps & ScalableProps>, {}>, React: Renderer): any[] | undefined;
    dragControlCondition: typeof directionCondition;
    dragControlStart(moveable: MoveableManager<ScalableProps & DraggableProps, SnappableState>, e: any): false | OnScaleStart;
    dragControl(moveable: MoveableManager<ScalableProps & DraggableProps & GroupableProps, SnappableState>, e: any): false | OnScale;
    dragControlEnd(moveable: MoveableManager<ScalableProps, {}>, e: any): any;
    dragGroupControlCondition: typeof directionCondition;
    dragGroupControlStart(moveable: MoveableGroup, e: any): false | OnScaleGroupStart;
    dragGroupControl(moveable: MoveableGroup, e: any): OnScaleGroup | undefined;
    dragGroupControlEnd(moveable: MoveableGroup, e: any): any;
    request(): {
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

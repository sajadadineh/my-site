import MoveableManager from "../../MoveableManager";
import { SnappableProps, DraggableProps, RotatableProps } from "../../types";
export declare function getInnerBoundInfo(moveable: MoveableManager<SnappableProps>, lines: number[][][], center: number[], datas: any): {
    sign: number[];
    isBound: boolean;
    isVerticalBound: boolean;
    isHorizontalBound: boolean;
    isSnap: boolean;
    offset: number[];
}[];
export declare function getInnerBoundDragInfo(moveable: MoveableManager<SnappableProps & DraggableProps, any>, poses: number[][], datas: any): {
    vertical: {
        isBound: boolean;
        offset: number;
    };
    horizontal: {
        isBound: boolean;
        offset: number;
    };
};
export declare function getCheckSnapLineDirections(direction: number[], keepRatio: boolean): number[][][];
export declare function getCheckSnapLines(poses: number[][], direction: number[], keepRatio: boolean): number[][][];
export declare function checkRotateInnerBounds(moveable: MoveableManager<SnappableProps & RotatableProps, any>, prevPoses: number[][], nextPoses: number[][], origin: number[], rotation: number): number[];
export declare function checkInnerBoundPoses(moveable: MoveableManager<SnappableProps>): {
    horizontal: number[];
    vertical: number[];
};

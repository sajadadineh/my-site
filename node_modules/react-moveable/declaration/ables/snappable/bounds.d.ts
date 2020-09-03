import MoveableManager from "../../MoveableManager";
import { BoundInfo, SnappableProps, RotatableProps } from "../../types";
export declare function checkBoundPoses(moveable: MoveableManager<SnappableProps>, verticalPoses: number[], horizontalPoses: number[]): {
    vertical: BoundInfo;
    horizontal: BoundInfo;
};
export declare function checkBoundKeepRatio(moveable: MoveableManager<SnappableProps>, startPos: number[], endPos: number[]): {
    vertical: {
        isBound: boolean;
        offset: number;
        pos: number;
    };
    horizontal: {
        isBound: boolean;
        offset: number;
        pos: number;
    };
};
export declare function isBoundRotate(relativePoses: number[][], boundRect: {
    left: number;
    top: number;
    right: number;
    bottom: number;
}, rad: number): boolean;
export declare function boundRotate(vec: number[], boundPos: number, index: number): number[];
export declare function checkRotateBounds(moveable: MoveableManager<SnappableProps & RotatableProps, any>, prevPoses: number[][], nextPoses: number[][], origin: number[], rotation: number): number[];

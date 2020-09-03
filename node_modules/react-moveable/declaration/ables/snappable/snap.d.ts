import { SnapInfo, SnappableProps, SnappableState, Guideline, ResizableProps, ScalableProps, SnapOffsetInfo } from "../../types";
import MoveableManager from "../../MoveableManager";
export declare function getGapGuidelines(guidelines: Guideline[], type: "vertical" | "horizontal", snapThreshold: number, index: number, [start, end]: number[], [otherStart, otherEnd]: number[]): Guideline[];
export declare function getTotalGuidelines(moveable: MoveableManager<SnappableProps, SnappableState>): Guideline[];
export declare function checkSnapPoses(moveable: MoveableManager<SnappableProps, SnappableState>, posesX: number[], posesY: number[], snapCenter?: boolean, customSnapThreshold?: number): {
    vertical: SnapInfo;
    horizontal: SnapInfo;
};
export declare function checkSnapKeepRatio(moveable: MoveableManager<SnappableProps, SnappableState>, startPos: number[], endPos: number[]): {
    vertical: SnapOffsetInfo;
    horizontal: SnapOffsetInfo;
};
export declare function checkSnaps(moveable: MoveableManager<SnappableProps, SnappableState>, rect: {
    left?: number;
    top?: number;
    bottom?: number;
    right?: number;
    center?: number;
    middle?: number;
}, isCenter: boolean, customSnapThreshold?: number): {
    vertical: SnapInfo;
    horizontal: SnapInfo;
};
export declare function getNearestSnapGuidelineInfo(snapInfo: SnapInfo): {
    isSnap: boolean;
    offset: number;
    dist: number;
    pos: number;
    guideline: null;
} | {
    isSnap: true;
    offset: number;
    dist: number;
    pos: number;
    guideline: Guideline;
};
export declare function getSnapInfosByDirection(moveable: MoveableManager<SnappableProps & (ResizableProps | ScalableProps), SnappableState>, poses: number[][], snapDirection: number[]): {
    vertical: SnapInfo;
    horizontal: SnapInfo;
};
export declare function getNearOffsetInfo<T extends {
    offset: number[];
    isBound: boolean;
    isSnap: boolean;
    sign: number[];
}>(offsets: T[], index: number): T;

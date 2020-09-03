import MoveableManager from "../MoveableManager";
import { ScrollableProps } from "../types";
import MoveableGroup from "../MoveableGroup";
declare const _default: {
    name: string;
    canPinch: boolean;
    props: {
        scrollable: BooleanConstructor;
        scrollContainer: ObjectConstructor;
        scrollThreshold: NumberConstructor;
    };
    dragStart(moveable: MoveableManager<ScrollableProps, {}>, e: any): void;
    checkScroll(moveable: MoveableManager<ScrollableProps, {}>, e: any): true | undefined;
    drag(moveable: MoveableManager<ScrollableProps, {}>, e: any): true | undefined;
    dragEnd(moveable: MoveableManager<ScrollableProps, {}>, e: any): void;
    dragControlStart(moveable: MoveableManager<ScrollableProps, {}>, e: any): void;
    dragControl(moveable: MoveableManager<ScrollableProps, {}>, e: any): true | undefined;
    dragControlEnd(moveable: MoveableManager<ScrollableProps, {}>, e: any): void;
    dragGroupStart(moveable: MoveableGroup, e: any): void;
    dragGroup(moveable: MoveableGroup, e: any): true | undefined;
    dragGroupEnd(moveable: MoveableGroup, e: any): void;
    dragGroupControlStart(moveable: MoveableGroup, e: any): void;
    dragGroupContro(moveable: MoveableGroup, e: any): true | undefined;
    dragGroupControEnd(moveable: MoveableGroup, e: any): void;
};
export default _default;

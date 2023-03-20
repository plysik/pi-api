import { Immutable, produce, Draft, current } from "immer"
import { ROW_SIZE } from "../../data/conts";
import { use2DArray } from "../../hooks/use2DArray";
import { usePairFinder } from "../../hooks/usePairFinder";
import { PrinterActionType } from './printer.actions';
type PrinterState = Immutable<{
    index: number;
    piArray: string[][];
    pairs: Array<Array<number[]>>;
}>;
export const reducer = produce((draft: Draft<PrinterState>, action) => {
    switch (action.type) {
        case PrinterActionType.PrintAnother:
            const { index, char } = action.payload;
            // console.log(index, char);
            draft.index = index + 1;
            const [row, col] = use2DArray(ROW_SIZE, index);
            // debugger;
            if (draft.piArray[row]) {
                draft.piArray[row].push(char);
            }
            else {
                draft.piArray[row] = [char];
            }
            const pairs = usePairFinder(current(draft).piArray, { x: col, y: row });
            draft.pairs = [...draft.pairs, ...pairs];

            return draft;
        default:
            return draft;
    }
})
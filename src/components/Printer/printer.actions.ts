import { createAction } from 'redux-actions';

export enum PrinterActionType {
    PrintAnother = 'PrintAnother',
    ResetPrinter = 'ResetPrinter'
}


export const printAnother = createAction(PrinterActionType.PrintAnother, (index: number, char: string) => { return { index, char } });
export const resetPrinter = createAction(PrinterActionType.ResetPrinter, () => { return null });
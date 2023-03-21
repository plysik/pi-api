import { FC, useCallback } from 'react';
import { printAnother, resetPrinter } from './Printer/printer.actions';

import { useInterval } from '../hooks/useInterval';
import { getAll, useDispatch, useSelector } from './Store';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { digits, ROW_SIZE } from '../data/conts';

import { BaseProps } from '../data/BaseProps';
interface Props extends BaseProps {
    pi: string;
}
const Updater: FC<Props> = ({ pi }) => {
    const { index, } = useSelector(getAll);
    const dispatch = useDispatch();
    const printPI = useCallback(
        () => {
            if (index < pi.length) {
                dispatch(printAnother(index, pi[index]))
            }
        },
        [index, pi, dispatch]
    );
    useInterval(printPI, 100);
    useUpdateEffect(() => {
        dispatch(resetPrinter())
    }, [ROW_SIZE, digits])
    return (
        null
    )
}

export default Updater
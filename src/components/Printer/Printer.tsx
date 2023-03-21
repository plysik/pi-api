import { FC, useCallback } from 'react';
import { printAnother, resetPrinter } from './printer.actions';

import { useInterval } from '../../hooks/useInterval';
import { getAll, useDispatch, useSelector } from '../Store';
import { render } from './printer.render';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { digits, ROW_SIZE } from '../../data/conts';
interface Props {
    pi: string;
}

const Printer: FC<Props> = ({ pi }) => {
    const { index, piArray, pairs } = useSelector(getAll);
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
        <fieldset>
            <legend>index: {index}</legend>
            <div className='pi-lines'>
                <ul className='pi'>
                    {render.Rows(piArray)}
                </ul>
                <ul className="lines">
                    {render.Lines(piArray, pairs)}
                </ul>
            </div>
        </fieldset>
    )
}


export default Printer





import { FC } from 'react';

import { render } from './printer.render';
import { getAll, useSelector } from '../Store';
interface Props {
    pi: string;
}

const Printer: FC<Props> = ({ pi }) => {
    const { index, piArray, pairs } = useSelector(getAll);

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





import { FC } from 'react'
import { BaseProps } from '../data/BaseProps';
interface Props extends BaseProps {
    'data-row': number
}
const Row: FC<Props> = ({ children, ...rest }) => {
    return (
        <li data-row={rest['data-row']}>
            <ul className='bullet-row'>
                {children}
            </ul>
        </li>
    )
}

export default Row
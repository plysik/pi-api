import { FC } from 'react'
import { colors } from '../data/colors';
interface Props {
    char: string;
}
const Char: FC<Props> = ({ char }) => {
    return (
        <li className='bullet' data-char={char} style={
            {
                borderColor: colors[char]
            }
        }
        ></li>
    )
}

export default Char
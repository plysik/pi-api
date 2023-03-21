import Char from "../Char";
import Row from "../Row";
import { getLineStyle } from './printer.helpers';

export const render = {
    Lines: (piArray: string[][], pairs: number[][][]) => {
        // return () => {
        return pairs.map((line, index) => <li className='line' key={`line-${index}`} style={getLineStyle(piArray, line)} > </li>);
        // };
    },

    Rows: (piArray: string[][]) => {
        const renderChar = (char: string, index: number, rowIndex: number) => <Char key={`char-${rowIndex}-${index}`} char={char} ></Char>;
        const renderChars = (rowIndex: number) => {
            return piArray[rowIndex].map((char: string, index: number) => renderChar(char, index, rowIndex));
        };
        return piArray.map((row, i) => <Row key={`row-${i}`} data-row={i} > {renderChars(i)}</Row>);
    }
}
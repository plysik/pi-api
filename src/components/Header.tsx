import { Children, FC } from 'react'
import { BaseProps } from '../data/BaseProps';
import { colors } from '../data/colors';
interface Props extends BaseProps {
    children: string
}
export const Header: FC<Props> = ({ children, ...rest }) => {
    return (
        <h1>
            {Children.map(children, (c) => {
                return c.split('').map(s => {
                    return <span style={{ color: `${colors[Math.floor(Math.random() * 10)]}` }}>{s}</span>
                })
            })}
        </h1>
    )
}
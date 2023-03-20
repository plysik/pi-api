import { ReactNode } from 'react';

interface IBaseProps<Children, ClassName, DangerouslySetInnerHTML> {
    children?: Children;
    className?: ClassName;
    dangerouslySetInnerHTML?: DangerouslySetInnerHTML
}

export type BaseProps<
    Children = ReactNode,
    ClassName = string | undefined,
    DangerouslySetInnerHTML = { __html: string } | undefined
> = IBaseProps<
    Children,
    ClassName,
    DangerouslySetInnerHTML
>;

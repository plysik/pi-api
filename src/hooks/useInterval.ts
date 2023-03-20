import { useEffect } from 'react';
export function useInterval(fn:Function, timeout: number):void {
    useEffect(() => {
        const interval: number = window.setInterval(fn, timeout);
        return () => { window.clearInterval(interval); };
    }, [fn]);
}
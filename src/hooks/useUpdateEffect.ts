import { useRef, useEffect } from 'react';

export function useUpdateEffect(effect: React.EffectCallback, dependencies?: React.DependencyList | undefined) {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            effect();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies ? [effect, ...dependencies] : [effect]);
}

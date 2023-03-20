
import { createContext, useReducer, useContext } from "react";
import { BaseProps } from "../data/BaseProps";
import { reducer } from "./Printer/printer.reducer";
type CB<T> = (s: IStore) => T;
interface IStoreContext {
    getValue: <T>(callback: CB<T>) => T,
    dispatch: React.Dispatch<any>
}
type IStore = {
    index: number;
    piArray: string[][];
    pairs: Array<Array<number[]>>;
}
const initialValue = { index: 0, pairs: [], piArray: [[]] }
export const Store = ({ children }: BaseProps) => {
    //{ index, piArray, pairs }
    const [state, dispatch] = useReducer(reducer, initialValue);

    function getValue<T>(callback: CB<T>) {
        return callback(state)
    };

    return (
        <StoreContext.Provider value={{ getValue, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};
const initialContext = {
    getValue: (cb: Function) => cb(0),
    dispatch: () => null
}
export const StoreContext = createContext<IStoreContext>(initialContext);

export function useSelector<T>(callback: CB<T>) {
    const { getValue } = useContext(StoreContext);
    return getValue(callback)
}
// Similarly dispatch can be provided like below
export const useDispatch = () => {
    const { dispatch } = useContext(StoreContext);
    return dispatch
}
export const getAll: (s: IStore) => IStore = (state) => state;
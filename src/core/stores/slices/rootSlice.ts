import { createSlice } from '@reduxjs/toolkit';
import { setRootIdAction } from '../reducers/root/setRootIdAction';
import { clearRootIdAction } from '../reducers/root/clearRootIdAction';

export interface RootInitialState {
    value: RootValue;
}

interface RootValue {
    id: number
}

export interface RootAction {
    type: string;
    payload: number;
}

const initialState = {
    value: {
        id: 0,
    } as RootValue,
} as RootInitialState;

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setRootIdAction,
        clearRootIdAction,
    },
});

export const { setRootIdAction: setRootId, clearRootIdAction: clearRootId } = rootSlice.actions;
export default rootSlice.reducer;
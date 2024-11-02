import {RootAction, RootInitialState} from "../../slices/rootSlice";

export const setRootIdAction = (state: RootInitialState, action: RootAction) => {
    state.value.id = action.payload;
}
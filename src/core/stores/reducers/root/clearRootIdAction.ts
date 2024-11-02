import { RootInitialState } from "../../slices/rootSlice";

export const clearRootIdAction = (state: RootInitialState) => {
    state.value.id = 0
}
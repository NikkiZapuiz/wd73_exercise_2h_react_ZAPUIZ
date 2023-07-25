import { createSlice } from "@reduxjs/toolkit";

export const artSlice = createSlice({
    name: 'art',
    initialState: [],
    reducers: {
        addArtToFavorites: (state, action) => {
            const newState = [...state];
            const art = action.payload

            const duplicateIndex = newState.findIndex(item => item.id === art.id);
            if (duplicateIndex === -1) {
                art.count = 1;
                newState.push(art);
            } else {
                newState[duplicateIndex] = {
                    ...newState[duplicateIndex],
                    count: newState[duplicateIndex].count + 1
                }
            }
            return newState
        }
    }
})

export const { addArtToFavorites } = artSlice.actions

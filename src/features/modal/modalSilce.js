import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    mState: false,
    description: "",
    bookTitle: "",
    bookImage: "",
    url: "",
  },
  reducers: {

    modalOpen: (state, action) => {

        state.mState =  true;
        state.description = action.payload.description;
        state.bookTitle = action.payload.bookTitle;
        state.bookImage = action.payload.bookImage;
        state.url = action.payload.url;

    },
    modalClose: (state) => {
        
        state.mState =  false;
        state.description = "";
        state.bookTitle = "";
        state.bookImage = "";
        state.url = "";
  },

  },
})

// Action creators are generated for each case reducer function
export const { modalOpen, modalClose } = modalSlice.actions

export default modalSlice.reducer
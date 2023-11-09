import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserState } from '@store/interfaces'

const initialState: UserState = {
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<number>) => {
      state.id = payload
    },
    logout: () => initialState,
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer

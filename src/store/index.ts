import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import user from './slices/user.slice'

const store = configureStore({
  reducer: {
    user,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store

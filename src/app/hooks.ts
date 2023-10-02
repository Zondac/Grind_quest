import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => RootDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
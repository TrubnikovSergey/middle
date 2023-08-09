import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = useDispatch<Dispatch<AnyAction>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

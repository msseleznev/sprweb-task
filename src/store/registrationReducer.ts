import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from './store';
import {ActivitiesType, FormValueType} from "../types/formValueType";

type SliceState = {
    formData: FormValueType;
    isSuccess: boolean;
    activities: ActivitiesType[]
};


const initialState: SliceState = {
    formData: {} as FormValueType,
    isSuccess: false,
    activities: [
        {
            name: 'Магазин',
            option: 'market',
        },
        {
            name: 'Региональная сеть магазинов',
            option: 'regional',
        },
        {
            name: 'Федеральная сеть магазинов',
            option: 'federal',
        },
        {
            name: 'Интернет-магазин',
            option: 'webStore',
        },
        {
            name: 'Автосервис',
            option: 'carService',
        },
    ]
};

const slice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setSuccess(state, action: PayloadAction<{ value: boolean }>) {
            state.isSuccess = action.payload.value;
        },
        setFormData(state, action: PayloadAction<{ data: FormValueType }>) {
            state.formData = action.payload.data;
        },
    },
});

export const registrationReducer = slice.reducer;
export const {setSuccess, setFormData,} =
    slice.actions;

export type RegActionsType =
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setFormData>


export const saveFormDataTC = (data: FormValueType): AppThunk =>
    dispatch => {
        dispatch(setFormData({data}))
        dispatch(setSuccess({value: true}))
    };

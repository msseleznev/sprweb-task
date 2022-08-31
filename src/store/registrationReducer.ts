import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from './store';
import {ActivitiesType, FormValueType} from "../types/formValueType";
import {MESSAGES_FOR_SUCCESS_BAR} from "../components/SnackBar/SnackBar";

type SliceState = {
    formData: FormValueType;
    isSuccess: boolean;
    activities: ActivitiesType[]
    appMessage: MESSAGES_FOR_SUCCESS_BAR
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
    ],
    appMessage: ''  as MESSAGES_FOR_SUCCESS_BAR
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
        setAppMessage(state, action: PayloadAction<MESSAGES_FOR_SUCCESS_BAR>) {
            state.appMessage = action.payload;
        },
    },
});

export const registrationReducer = slice.reducer;
export const {setSuccess, setFormData, setAppMessage} =
    slice.actions;

export type RegActionsType =
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setFormData>
    | ReturnType<typeof setAppMessage>


export const saveFormDataTC = (data: FormValueType): AppThunk =>
    dispatch => {
        dispatch(setFormData({data}))
        dispatch(setSuccess({value: true}))
        dispatch(setAppMessage(MESSAGES_FOR_SUCCESS_BAR.LOGGED_IN_SUCCESSFULLY, ));
    };

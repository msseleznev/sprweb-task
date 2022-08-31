import React, {useState} from 'react';
import s from './App.module.scss';
import ReCAPTCHA from "react-google-recaptcha";
import {useFormik} from "formik";
import {FormValueType} from "./types/formValueType";
import {Input} from './components/Input';
import {Radio} from './components/Radio';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {saveFormDataTC} from "./store/registrationReducer";
import {SNACK_BAR_TYPES, SnackBar} from "./components/SnackBar/SnackBar";

const App = () => {
    const {activities,appMessage} = useAppSelector(state => state.registration)
    const dispatch = useAppDispatch()


    const formik = useFormik({
        initialValues: {
            email: '',
            companyName: '',
            taxpayerId: '',
            city: '',
            street: '',
            houseNumber: '',
            office: '',
            phone: '',
            ulr: '',
            market: false,
            regional: false,
            federal: false,
            webStore: false,
            carService: false,
            other: '',
        } as FormValueType,
        onSubmit: (values: FormValueType) => {
            dispatch(saveFormDataTC(values))
        },
        validate: (values: FormValueType) => {
            const errors = {} as FormValueType;
            if (!values.email) errors.email = 'Error';
            if (!values.companyName) errors.companyName = 'Error';
            if (!values.taxpayerId) errors.taxpayerId = 'Error';
            if (!values.city) errors.city = 'Error';
            if (!values.street) errors.street = 'Error';
            if (!values.houseNumber) errors.houseNumber = 'Error';
            if (!values.phone) errors.phone = 'Error';
            return errors;
        }
    });


    const emailFieldError = formik.errors.email && formik.touched.email ? formik.errors.email : '';
    const companyNameFieldError = formik.errors.companyName && formik.touched.companyName ? formik.errors.companyName : '';
    const taxpayerIdFieldError = formik.errors.taxpayerId && formik.touched.taxpayerId ? formik.errors.taxpayerId : '';
    const cityFieldError = formik.errors.city && formik.touched.city ? formik.errors.city : '';
    const streetFieldError = formik.errors.street && formik.touched.street ? formik.errors.street : '';
    const houseNumberFieldError = formik.errors.houseNumber && formik.touched.houseNumber ? formik.errors.houseNumber : '';
    const phoneFieldError = formik.errors.phone && formik.touched.phone ? formik.errors.phone : '';

    const statusOptions = ["Покупатель", "Поставщик",]
    const [status, setStatus] = useState('Покупатель')
    return (
        <div className={s.field}>
            <form className="box has-background-light"
                  onSubmit={formik.handleSubmit}>
                <h5 className="title is-5">
                    Регистрация
                </h5>
                <section className="block m-6">
                    <p className="mb-1"><strong>Вы регистрируетесь как</strong></p>
                    <Radio options={statusOptions}
                           value={status}
                           onChangeOption={setStatus}/>
                </section>
                <div className={s.formItemBlock}>
                    <label className="label has-text-weight-normal has-text-right"
                           htmlFor={"email"}>Эл.почта</label>
                    <div className={s.wrapper}>
                        <Input type={'email'}
                               error={emailFieldError}
                               {...formik.getFieldProps('email')}/>
                    </div>
                </div>
                <p><strong>Название организации</strong></p>
                <div className={s.formItemBlock}>
                    <label className="label has-text-weight-normal has-text-right">ИП или
                        Юр.лицо</label>
                    <div className={s.wrapper}>
                        <Input type={'text'}
                               error={companyNameFieldError}
                               {...formik.getFieldProps('companyName')}/>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label
                        className="label has-text-weight-normal has-text-right">ИНН</label>
                    <div className={s.wrapper}>
                        <Input type={'text'}
                               error={taxpayerIdFieldError}
                               {...formik.getFieldProps('taxpayerId')}/>
                    </div>
                </div>
                <p><strong>Фактический адрес</strong></p>
                <div className={s.formItemBlock}>
                    <label className="label has-text-weight-normal has-text-right">Ваш
                        город</label>
                    <div className={s.wrapper}>
                        <Input type={'text'}
                               error={cityFieldError}
                               {...formik.getFieldProps('city')}/>
                    </div>
                </div>
                <div className={s.addressBlock}>
                    <label
                        className={`label has-text-weight-normal has-text-right ${s.addressLabel}`}>Улица</label>
                    <div className={s.addressWrapper}>
                        <div>
                            <Input type={'text'}
                                   error={streetFieldError}
                                   {...formik.getFieldProps('street')}/>
                        </div>
                        <div className={"is-flex"}>
                            <label
                                className="label has-text-weight-normal has-text-right">
                                <div style={{width: 80, marginRight: 20}}>Дом/стр.</div>
                            </label>
                            <Input type={'text'}
                                   error={houseNumberFieldError}
                                   {...formik.getFieldProps('houseNumber')}/>
                        </div>
                        <div className={s.officeBlock}>
                            <label
                                className="label has-text-weight-normal has-text-right"> Офис</label>
                            <input className="input is-small ml-4"
                                   type="text"
                                   {...formik.getFieldProps('office')}/>
                        </div>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label
                        className="label has-text-weight-normal has-text-right">Телефон</label>
                    <div className={s.wrapper}>
                        <button className="button is-static is-small">
                            +7
                        </button>
                        <Input type={'tel'}
                               error={phoneFieldError}
                               {...formik.getFieldProps('phone')}/>
                    </div>
                </div>
                {status === 'Поставщик'
                    && <div className={s.formItemBlock}>
                        <label className="label has-text-weight-normal has-text-right">Сайт
                            вашей компании</label>
                        <div className={s.wrapper}>
                            <Input type={'text'}
                                   {...formik.getFieldProps('ulr')}/>
                        </div>
                    </div>}
                <p><strong>Виды деятельности</strong></p>
                {activities.map((item, index) =>
                    <div className={s.formItemBlock} key={index}>
                        <label
                            className={"label has-text-weight-normal has-text-right"}>{item.name}</label>
                        <div className={s.wrapper}>
                            <input type="checkbox"
                                   {...formik.getFieldProps(item.option)}/>
                        </div>
                    </div>
                )}
                <div className={s.formItemBlock}>
                    <label
                        className="label has-text-weight-normal has-text-right">Прочее</label>
                    <div className={s.wrapper}>
                        <Input type={'text'}
                               {...formik.getFieldProps('other')}/>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label
                        className="label has-text-weight-normal has-text-right"></label>
                    <div className={s.wrapper}>
                        <ReCAPTCHA className={"mt-6 mb-4"}
                                   sitekey="Your client site key"
                                   onChange={() => {
                                   }}/>
                    </div>
                </div>
                <div className={s.buttonBox}>
                    <button className="button is-info is-small is-fullwidth"
                            type={'submit'}>Отправить
                        заявку
                    </button>
                </div>
            </form>
            {appMessage &&
                <SnackBar message={appMessage} type={SNACK_BAR_TYPES.SUCCESS}/>}
        </div>
    );
}

export default App;

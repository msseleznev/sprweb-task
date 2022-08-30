import React from 'react';
import s from './App.module.scss';
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
    return (
        <div className={s.field}>
            <form className="box has-background-light">
                <h5 className="title is-5">
                    Регистрация
                </h5>
                <section className="block m-6">
                    <p className="mb-1"><strong>Вы регистрируетесь как</strong></p>
                    <div className="control is-align-content-flex-start">
                        <div>
                            <label className="radio">
                                <input type="radio" name="question" checked/>
                                <strong className="ml-1">Покупатель</strong>
                            </label>
                        </div>
                        <div>
                            <label className="radio">
                                <input type="radio" name="question"/>
                                <strong className="ml-1">Поставщик</strong>
                            </label>
                        </div>
                    </div>
                </section>


                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right">Эл.почта</label>
                    <div className={s.wrapper}>
                        <input className="input is-small" type="email"/>
                    </div>
                </div>
                <p><strong>Название организации</strong></p>
                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right">ИП или Юр.лицо</label>
                    <div className={s.wrapper}>
                        <input className="input is-small" type="text"/>
                    </div>
                </div>
                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right">ИНН</label>
                    <div className={s.wrapper}>
                        <input className="input is-small" type="text"/>
                    </div>
                </div>
                <p><strong>Фактический адрес</strong></p>
                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right">Ваш город</label>
                    <div className={s.wrapper}>
                        <input className="input is-small" type="text"/>
                    </div>
                </div>
                <div className={s.addressBlock }>
                    <label className={`label has-text-weight-normal has-text-right ${s.addressLabel}`}>Улица</label>
                    <div className={s.addressWrapper}>
                        <div>
                            <input className="input is-small" type="text"/>
                        </div>

                        <div className={"is-flex"}>
                            <label className="label has-text-weight-normal has-text-right">
                                <div style={{width: 80}}>Дом/стр.</div></label>
                            <input className="input is-small ml-4" type="text"/>
                        </div>
                       <div className={s.officeBlock}>
                           <label className="label has-text-weight-normal has-text-right"> Офис</label>
                           <input className="input is-small ml-4" type="text"/>
                       </div>

                    </div>
                </div>
                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right">Телефон</label>
                    <div className={s.wrapper}>
                        <button className="button is-static is-small">
                            +7
                        </button>
                        <input className="input is-small" type="tel"/>
                    </div>
                </div>
                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right">Сайт вашей компании</label>
                    <div className={s.wrapper}>
                        <input className="input is-small" type="url"/>
                    </div>
                </div>
                <p><strong>Виды деятельности</strong></p>
                <div className={s.formItemBlock}>
                    <label className={"label has-text-weight-normal has-text-right"}>Магазин</label>
                    <div className={s.wrapper}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label className={"label has-text-weight-normal has-text-right"}>Региональная сеть магазинов</label>
                    <div className={s.wrapper}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label className={"label has-text-weight-normal has-text-right"}>Федеральная сеть магазинов</label>
                    <div className={s.wrapper}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label className={"label has-text-weight-normal has-text-right"}>Федеральная сеть магазинов</label>
                    <div className={s.wrapper}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label className={"label has-text-weight-normal has-text-right"}>Интернет-магазин</label>
                    <div className={s.wrapper}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className={s.formItemBlock}>
                    <label className={"label has-text-weight-normal has-text-right"}>Автосервис</label>
                    <div className={s.wrapper}>
                        <input type="checkbox"/>
                    </div>
                </div>
                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right">Прочее</label>
                    <div className={s.wrapper}>
                        <input className="input is-small" type="text"/>
                    </div>
                </div>
                <div className={s.formItemBlock }>
                    <label className="label has-text-weight-normal has-text-right"></label>
                    <div className={s.wrapper}>
                        <ReCAPTCHA className={"mt-6 mb-4"} sitekey="Your client site key"
                                   onChange={()=>{}} />
                    </div>
                </div>


                <div className={s.buttonBox}>
                    <button className="button is-info is-small is-fullwidth">Отправить
                        заявку
                    </button>
                </div>
            </form>
        </div>


    );
}

export default App;

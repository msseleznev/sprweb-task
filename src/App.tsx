import React from 'react';
import './App.scss';

const App = () => {
    return (
        <form className="box">
            <h5 className="title is-5">
                Регистрация
            </h5>
            <section className="block m-6">
                <p className="mb-1"><strong>Вы регистрируетесь как</strong></p>
                <div className="control">
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

            <div className="field">
                <label>Эл.почта</label>
                <input className="input is-small ml-5" type="url"/>
            </div>

            <p><strong>Название организации</strong></p>
            <div className="field">
                <label>ИП или Юр.лицо</label>
                <input className="input is-small ml-5" type="text"/>
            </div>
            <div className="field">
                <label>ИНН</label>
                <input className="input is-small ml-5" type="text"/>
            </div>

            <p><strong>Фактический адрес</strong></p>
            <div className="field">
                <label>Ваш город</label>
                <input className="input is-small ml-5" type="url"/>
            </div>
            <div className="field address">
                <label>Улица</label>
                <input className="input is-small ml-5" type="url"/>
                <label>Дом/стр.</label>
                <input className="input is-small ml-5" type="url"/>
                <label>Офис</label>
                <input className="input is-small ml-5" type="url"/>
            </div>
            <div className="field">
                <label>Телефон</label>
                <div className='phoneField'>
                    <a className="button is-static is-small ml-5">
                        +7
                    </a>
                    <input className="input is-small" type="tel"/>
                </div>

            </div>
            <div className="field">
                <label>Сайт вашей компании</label>
                <input className="input is-small ml-5" type="url"/>
            </div>

            <p><strong>Виды деятельности</strong></p>
            <div className="field">
                <label className="checkbox mr-5">Магазин</label>
                <input type="checkbox"/>
            </div>
            <div className="field">
                <label className="checkbox mr-5">Региональная сеть магазинов</label>
                <input type="checkbox"/>
            </div>
            <div className="field">
                <label className="checkbox mr-5">Федеральная сеть магазинов</label>
                <input type="checkbox"/>
            </div>
            <div className="field">
                <label className="mr-5">Интернет-магазин</label>
                <input type="checkbox"/>
            </div>
            <div className="field">
                <label className="mr-5">Автосервис</label>
                <input type="checkbox"/>
            </div>
            <div className="field">
                <label className="mr-5">Прочее</label>
                <input className="input is-small ml-5"/>
            </div>
            <div className='buttonBox'>
                <button className="button is-info is-small is-fullwidth">Отправить заявку</button>
            </div>
        </form>


    );
}

export default App;

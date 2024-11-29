import './App.css'
import adding from './helpers/countingadd.js';
import substract from './helpers/countingsubstract.js';
import logo from './assets/screenshot-logo.png';
import React from 'react';

function App() {
    const [aardbeiValue, setAardbeiValue] = React.useState(0);
    const [bananenValue, setBananenValue] = React.useState(0);
    const [appelsValue, setAppelsValue] = React.useState(0);
    const [kiwisValue, setKiwisValue] = React.useState(0);
    const [firstnameValue, setFirstnameValue] = React.useState('');
    const [lastnameValue, setLastnameValue] = React.useState('');

    function handleReset() {
        setAardbeiValue(0);
        setBananenValue(0);
        setAppelsValue(0);
        setKiwisValue(0);
    }

    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <header>
                        <img src={logo} alt="logo van het bedrijf"/>
                    </header>

                    <main>
                        <section>

                            <div className="fruit-section">
                                <p>aardbeien

                                    <button
                                        type="button"
                                        name="aardbei"
                                        value={aardbeiValue}
                                        onClick={() => {
                                            setAardbeiValue(substract(aardbeiValue))
                                        }}
                                    >
                                        -
                                    </button>

                                    <span className="fruit-value">{aardbeiValue}</span>

                                    <button
                                        type="button"
                                        name="aardbei"
                                        value={aardbeiValue}
                                        onClick={() => {
                                            setAardbeiValue(adding(aardbeiValue))
                                        }}
                                    >
                                        +
                                    </button>
                                </p>
                            </div>


                            <div className="fruit-section">
                                <p>Bananen
                                    <button
                                        type="button"
                                        name="banaan"
                                        value={bananenValue}
                                        onClick={() => {
                                            setBananenValue(substract(bananenValue))
                                        }}
                                    >
                                        -
                                    </button>

                                    <span className="fruit-value">{bananenValue}</span>

                                    <button
                                        type="button"
                                        name="banaan"
                                        value={bananenValue}
                                        onClick={() => {
                                            setBananenValue(adding(bananenValue))
                                        }}
                                    >
                                        +
                                    </button>
                                </p>
                            </div>

                            <div className="fruit-section">
                                <p>Appels
                                    <button
                                        type="button"
                                        name="appels"
                                        value={appelsValue}
                                        onClick={() => {
                                            setAppelsValue(substract(appelsValue))
                                        }}
                                    >
                                        -
                                    </button>

                                    <span className="fruit-value">{appelsValue}</span>

                                    <button
                                        type="button"
                                        name="appels"
                                        value={appelsValue}
                                        onClick={() => {
                                            setAppelsValue(adding(appelsValue))
                                        }}
                                    >
                                        +
                                    </button>
                                </p>
                            </div>

                            <div className="fruit-section">
                                <p>Kiwi´s
                                    <button
                                        type="button"
                                        name="kiwis"
                                        value={kiwisValue}
                                        onClick={() => {
                                            setKiwisValue(substract(kiwisValue))
                                        }}
                                    >
                                        -
                                    </button>

                                    <span className="fruit-value">{kiwisValue}</span>

                                    <button
                                        type="button"
                                        name="kiwis"
                                        value={kiwisValue}
                                        onClick={() => {
                                            setKiwisValue(adding(kiwisValue))
                                        }}
                                    >
                                        +
                                    </button>
                                </p>
                            </div>

                                <button
                                    type="button"
                                    className="reset-button"
                                    onClick={handleReset}
                                >
                                    reset
                                </button>

                        </section>

                        <section>
                            <form>
                                <label htmlFor="firstname">Voornaam
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={firstnameValue}
                                        onChange={(e) => {
                                            setFirstnameValue(e.target.value)
                                        }}
                                    />
                                </label>


                                <label htmlFor="lastname">Achternaam
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={lastnameValue}
                                        onChange={(e) => {
                                            setLastnameValue(e.target.value)
                                        }}
                                    />
                                </label>

                            </form>
                        </section>
                    </main>
                </div>
            </div>

        </>
    )
}

export default App

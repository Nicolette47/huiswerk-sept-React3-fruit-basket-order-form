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
    const [ageValue, setAgeValue] = React.useState(0);
    const [zipCodeValue, setZipCodeValue] = React.useState('');
    const [deliverValue, setDeliverValue] = React.useState('');
    const [partOfDayValue, togglePartOfDayValue] = React.useState('');
    const [remarkValue, setRemarkValue] = React.useState('');
    const [termsConditionsValue, toggleTermsConditionsValue] = React.useState(false);

    function handleReset() {
        setAardbeiValue(0);
        setBananenValue(0);
        setAppelsValue(0);
        setKiwisValue(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(aardbeiValue, bananenValue, appelsValue, kiwisValue, firstnameValue, lastnameValue, ageValue, zipCodeValue, deliverValue, partOfDayValue,remarkValue);
        console.log(termsConditionsValue ? "ik ben akkoord met de voorwaarden" : " ik ben niet akkoord met de voorwaarden");
    }


    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <header>
                        <img src={logo} alt="logo van het bedrijf"/>
                    </header>

                    <main>
                        <form onSubmit={handleSubmit}>
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

                                <label htmlFor="firstname-field">Voornaam
                                    <input
                                        type="text"
                                        id="firstname-field"
                                        name="firstname"
                                        value={firstnameValue}
                                        onChange={(e) => {
                                            setFirstnameValue(e.target.value)
                                        }}
                                    />
                                </label>

                                <label htmlFor="lastname-field">Achternaam
                                    <input
                                        type="text"
                                        id="lastname-field"
                                        name="lastname"
                                        value={lastnameValue}
                                        onChange={(e) => {
                                            setLastnameValue(e.target.value)
                                        }}
                                    />
                                </label>

                                <label htmlFor="age-field">Leeftijd
                                    <input
                                        type="text"
                                        id="age-field"
                                        name="age"
                                        value={ageValue}
                                        onChange={(e) => {
                                            setAgeValue(e.target.value)
                                        }}
                                    />
                                </label>

                                <label htmlFor="zipcode-field">Postcode
                                    <input
                                        type="text"
                                        id="zipcode-field"
                                        name="zipcode"
                                        value={zipCodeValue}
                                        onChange={(e) => {
                                            setZipCodeValue(e.target.value)
                                        }}
                                    />
                                </label>

                                <label htmlFor="deliver-frequency">Bezorgfrequentie</label>
                                <select
                                    id="deliver-frequency"
                                    name="bezorgfrequentie"
                                    value={deliverValue}
                                    onChange={(e) => setDeliverValue(e.target.value)}
                                >
                                    <option value="Iedere week">Iedere week</option>
                                    <option value="Om de week">Om de week</option>
                                    <option value="iedere maand">Iedere maand</option>
                                </select>

                                <label>
                                    <input
                                        type="radio"
                                        name="partOfDay"
                                        value="overdag"
                                        checked={partOfDayValue === "overdag"}
                                        onChange={(e) => togglePartOfDayValue(e.target.value)}
                                    />
                                    Overdag
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="partOfDay"
                                        value="'s Avonds"
                                        checked={partOfDayValue === "'s Avonds"}
                                        onChange={(e) => togglePartOfDayValue(e.target.value)}
                                    />
                                    ´s Avonds
                                </label>

                                <label htmlFor="remark-field">Opmerkingen</label>
                                <textarea
                                    id="remark-field"
                                    name="opmerkingen"
                                    value={remarkValue}
                                    onChange={(e) => setRemarkValue(e.target.value)}
                                    rows="5"
                                    cols="50"
                                ></textarea>

                                <label htmlFor="termsAndConditions">
                                    <input
                                        type="checkbox"
                                        id="termsAndConditions"
                                        name="terms-and-conditions"
                                        checked={termsConditionsValue}
                                        onChange={() => toggleTermsConditionsValue(!termsConditionsValue)}
                                    />
                                    Ik ga akkoord met de algemene voorwaarden
                                </label>

                                <button type="submit">
                                    Verzenden
                                </button>
                            </section>
                        </form>
                </main>
            </div>
            </div>

        </>
    )
}

export default App

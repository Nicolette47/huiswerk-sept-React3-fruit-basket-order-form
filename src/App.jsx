import './App.css'
import adding from './helpers/countingadd.js';
import substract from './helpers/countingsubstract.js';
import logo from './assets/screenshot-logo.png';
import React from 'react';
import Buttongeneral from './componenten/Buttongeneral.jsx'

function App() {
    const [aardbeiValue, setAardbeiValue] = React.useState(0);
    const [bananenValue, setBananenValue] = React.useState(0);
    const [appelsValue, setAppelsValue] = React.useState(0);
    const [kiwisValue, setKiwisValue] = React.useState(0);
    //const [firstnameValue, setFirstnameValue] = React.useState('');
    //const [lastnameValue, setLastnameValue] = React.useState('');
    //const [ageValue, setAgeValue] = React.useState(0);
    //const [zipCodeValue, setZipCodeValue] = React.useState('');
    //const [deliverValue, setDeliverValue] = React.useState('');
    //const [partOfDayValue, togglePartOfDayValue] = React.useState('');
    //const [remarkValue, setRemarkValue] = React.useState('');
    //const [termsConditionsValue, toggleTermsConditionsValue] = React.useState(false);

    function handleReset() {
        setAardbeiValue(0);
        setBananenValue(0);
        setAppelsValue(0);
        setKiwisValue(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(aardbeiValue, bananenValue, appelsValue, kiwisValue);
        console.log({
            ...formState,
            termsAndConditions: formState.termsAndConditions
                ? 'Ik ga akkoord met de voorwaarden'
                : 'Ik ga niet akkoord met de voorwaarden',
        });
    }

    const [formState, setFormState] = React.useState({
        firstname: '',
        lastname: '',
        age: '',
        postcode: '',
        bezorgfrequentie: '',
        dagdeelbezorgen: '',
        opmerkingen: '',
        termsAndConditions: false,
    });

    function handleChange(e) {
        const inputFieldChange = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [inputFieldChange]: newValue,
        });
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

                                <Buttongeneral
                                    type="button"
                                    onClick={handleReset}
                                    text="reset"
                                />

                            </section>

                            <section>

                                <label htmlFor="firstname-field" className="detail-field">Voornaam
                                    <input
                                        type="text"
                                        id="firstname-field"
                                        name="firstname"
                                        value={formState.firstname}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label htmlFor="lastname-field" className="detail-field">Achternaam
                                    <input
                                        type="text"
                                        id="lastname-field"
                                        name="lastname"
                                        value={formState.lastname}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label htmlFor="age-field" className="detail-field">Leeftijd
                                    <input
                                        type="text"
                                        id="age-field"
                                        name="age"
                                        value={formState.age}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label htmlFor="zipcode-field" className="detail-field">Postcode
                                    <input
                                        type="text"
                                        id="zipcode-field"
                                        name="postcode"
                                        value={formState.postcode}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label htmlFor="deliver-frequency" className="deliver-section">Bezorgfrequentie</label>
                                <select
                                    id="deliver-frequency"
                                    name="bezorgfrequentie"
                                    value={formState.bezorgfrequentie}
                                    onChange={handleChange}
                                >
                                    <option value="Iedere week">Iedere week</option>
                                    <option value="Om de week">Om de week</option>
                                    <option value="iedere maand">Iedere maand</option>
                                </select>

                                <label className="deliver-radiobutton">
                                    <input
                                        type="radio"
                                        name="dagdeelbezorgen"
                                        value="overdag"
                                        checked={formState.dagdeelbezorgen === "overdag"}
                                        onChange={handleChange}
                                    />
                                    Overdag
                                </label>

                                <label className="deliver-radiobutton">
                                    <input
                                        type="radio"
                                        name="dagdeelbezorgen"
                                        value="'s avonds"
                                        checked={formState.dagdeelbezorgen === "'s avonds"}
                                        onChange={handleChange}
                                    />
                                    ´s Avonds
                                </label>

                                <label htmlFor="remark-field" >Opmerkingen</label>
                                <textarea
                                    id="remark-field"
                                    name="opmerkingen"
                                    value={formState.opmerking}
                                    onChange={handleChange}
                                    rows="8"
                                    cols="80"
                                ></textarea>

                                <label htmlFor="termsAndConditions" className="terms-conditions-section">
                                    <input
                                        type="checkbox"
                                        id="termsAndConditions"
                                        name="termsAndConditions"
                                        checked={formState.termsAndConditions}
                                        onChange={handleChange}
                                    />
                                    Ik ga akkoord met de algemene voorwaarden
                                </label>

                                <Buttongeneral
                                    type="submit"
                                    onClick={handleSubmit}
                                    text="verzenden"
                                />
                            </section>
                        </form>
                    </main>
                </div>
            </div>

        </>
    )
}

export default App

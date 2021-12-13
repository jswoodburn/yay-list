import React, {useState} from 'react';
import * as style from '../styles/form.css';

const Form = (
    token
) => {

    const [sentence, setSentence] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(token);
        alert(`Yay! Your auth token is ${token}}`);
    }
    return (
        <div className="page">
            <div className="titleBanner">
                <h1 className="titleText">Yay-List!</h1>
            </div>
            <div className="body">
                <div className="formBox">
                    <div className="formTitle">
                        <h2 className="formTitleText">Every song has a message, and so does every</h2>
                        <h2 className="inlineYayList">Yay-List!</h2>
                    </div>
                    <form className="formField" onSubmit={handleSubmit}>
                        <input className="formTextField" type={'text'} name={'sentence'} value={sentence} onChange={e => setSentence(e.target.value)} />
                        <input className="formButton" type={'submit'} value={'Yay!'} />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Form;
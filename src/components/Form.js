import React, {useEffect, useState} from 'react';
import * as style from '../styles/form.css';

const ProgressBar = (props) => {
    const { isShowing, completed, setCompleted } = props;

    useEffect(() => {
        if (completed < 98) {
            setInterval(() => (setCompleted(completed+2)), 20)
        }
    }, [completed]);

    const containerStyles = {
        marginTop: 30,
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#8f05ff",
        borderRadius: 'inherit',
        textAlign: 'right',
        // transition: 'width 0.1s ease-in'
    }

    return isShowing && (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
        </div>
    );
};

const Form = (
    token
) => {
    const [sentence, setSentence] = useState('');
    const [progressBarShowing, setProgressBarShowing] = useState(false);
    const [percentageComplete, setPercentageComplete] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(token);
        setProgressBarShowing(true);
        setPercentageComplete(2)
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
                    <ProgressBar className="progressBar" isShowing={progressBarShowing} completed={percentageComplete} setCompleted={setPercentageComplete}/>
                </div>
            </div>
        </div>
    )
};

export default Form;
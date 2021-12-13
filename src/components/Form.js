import React, {useState} from 'react';

const Form = (
    token
) => {
    const [sentence, setSetence] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(token);
        alert(`Yay! Your auth token is ${token}}`);
    }
    return (
        <div>
            <h1>Yay-List!</h1>
            <form onSubmit={handleSubmit}>
                <input type={'text'} name={'sentence'} value={sentence} onChange={e => setSetence(e.target.value)} />
                <input type={'submit'} value={'Yay!'} />
            </form>
        </div>
    )
};

export default Form;
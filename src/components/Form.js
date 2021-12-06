import React, {useParams, useState} from 'react';

const Form = () => {
    const [sentence, setSetence] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Yay! Making playlist for ${sentence}`);
    }
    const {code} = useParams();
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
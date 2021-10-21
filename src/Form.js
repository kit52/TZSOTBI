import React, { useState } from 'react';

const Form = () => {
    //Вынес сюда чтоб не захламлять сильно App
    const [textValue, setTextValue] = useState();
    const [numberValue, setNumberValue] = useState();
    const [textareaValue, setTextareaValue] = useState()
    document.querySelector('.input_text').addEventListener("input", (e) => {
        setTextValue(e.target.value);
    })
    document.querySelector('.input_number').addEventListener("input", (e) => {
        setNumberValue(e.target.value);
    })
    document.querySelector('.input_area').addEventListener("input", (e) => {
        setTextareaValue(e.target.value);
    })
    return (
        <div>
            <h2>
                В приложении
            </h2>
            <p>
                {textValue}
            </p>
            <p>
                {numberValue}
            </p>
            <p>
                {textareaValue}
            </p>
        </div>
    );
};

export default Form;
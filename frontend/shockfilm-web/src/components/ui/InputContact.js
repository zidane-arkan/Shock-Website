import React, { useState, useRef } from 'react';

const InputContact = ({ type, typeName, typeId, htmlfor, ariaDescribe }) => {
    const refData = useRef();
    const [isFocus, setIsFocus] = useState(false);
    const top = {
        blur: { top: "1rem" },
        focus: { top: "-1.5rem" }
    };
    const changePosition = (e) => {
        e.preventDefault();
        setIsFocus(!isFocus);
        const value = refData.current.value.length;
        if (value > 0) {
            setIsFocus(true);
            console.log(value);
        }
    };
    return (
        <div className="position-relative mb-3">
            <label
                htmlFor="name"
                className="form-label label__custom "
                style={isFocus ? top.focus : top.blur}
            >
                Name
            </label>
            <input
                onBlur={changePosition}
                onClick={changePosition}
                ref={refData}
                // onBlur={changePosition}
                type="text"
                className="form-control form__contactus form__control__custom"
                id="name"
                defaultValue=""
            />
        </div>
    );
};

export default InputContact;
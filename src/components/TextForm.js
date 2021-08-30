import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const removeSpaces = () => {
        let newText = text.replace(/ {2,}/g,' ');
        setText(newText);
    }

    const clearBox = () => { setText('') };

    const countwords = () => {
        if (text.length < 1) return text.split(" ").length - 1;
        else if (text[text.length - 1] === ' ') return text.split(" ").length - 1;
        else return text.split(" ").length;
    }

    function copyText() {
        let copiedText = document.getElementById('myInputBox');
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        document.getSelection().removeAllRanges();
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new Text"; wrong way to change text state
    // setText("new Text"); Right way to change text state

    return (
        <>
            <div className="container my-5" style={{backgroundColor: props.mode==='dark'?'#192538':'white' , color: props.mode==='dark'?'white':'black'}}> 
                <label id="myInputLabel" className="form-label">Enter text to analyze :</label>
                <textarea style={{backgroundColor: props.mode==='dark'?'#192538':'white' , color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} className="form-control" id="myInputBox" placeholder="Enter text here!" rows="10"></textarea>
                <p id='lengthCounter' className="mx-2">{countwords()} words and {text.length} characters</p>

                <button disabled={text.length===0} className="btn btn-secondary my-1 mx-1 btn-sm" onClick={handleLowercase} style={{color: props.mode==='dark'?'black':'white'}}>To LowerCase</button>
                <button disabled={text.length===0} className="btn btn-secondary my-1 mx-1 btn-sm" onClick={handleUppercase} style={{color: props.mode==='dark'?'black':'white'}}>To UpperCase</button>
                <button disabled={text.length===0} className="btn btn-secondary my-1 mx-1 btn-sm" onClick={removeSpaces} style={{color: props.mode==='dark'?'black':'white'}}>Remove Space</button>

                <button disabled={text.length===0} type="button" className="btn btn-outline-primary btn-sm" id="resetButton" style={{backgroundColor: props.mode==='dark'?'blue':'' , color: props.mode==='dark'?'white':''}} onClick={clearBox}>Clear Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-outline-primary btn-sm mx-2" id="copyButton" style={{backgroundColor: props.mode==='dark'?'blue':'' ,color: props.mode==='dark'?'white':''}} onClick={copyText}>Copy Text</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <label id="myOutputLabel" className="form-label">Preview :</label>
                <p id="myOutputBox"> {text} </p>
            </div>
        </>
    )
};

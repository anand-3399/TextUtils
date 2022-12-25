import React, { useState } from 'react'

export default function TextForm(props) {

    

    const [text, setText] = useState('')
    // text = "new text" //wrong way to update state
    // setText("new text") //correct way to update state

    const handleUpClick = (e) => {
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        // setText("you clicked on handleUpClick")
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = (e) => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = (e) => {
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#0d0d3f' }} >
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#0d0d3f' }} ></textarea>
                </div>

                {/* Functions of buttons */}
                <button disabled={text.split(" ").filter((element) => { return element.length !== 0 }).length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.split(" ").filter((element) => { return element.length !== 0 }).length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.split(" ").filter((element) => { return element.length !== 0 }).length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.split(" ").filter((element) => { return element.length !== 0 }).length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.split(" ").filter((element) => { return element.length !== 0 }).length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>


            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#0d0d3f' }} >
                {/* words and characters count*/}
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p>

                {/* Minutes Read TIME */}
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to prieview"}</p>
            </div>
        </>
    )
}

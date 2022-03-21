
import React, {useState} from 'react';

const Maincontainer = (props) => {
    const [text, settext] = useState('');
    const handleOnClick = ()=>{
        let NewText = text.toUpperCase();
        settext(NewText);
        props.showAlert("Text changed to Uppercase", "success")
    }
    const handleOnChange =(event)=>{
        settext(event.target.value);
        
    }
    const handleOnClick2 = ()=>{
        let NewText = text.toLowerCase();
        settext(NewText);
        props.showAlert("Text changed to Lowercase", "success")
    }
    const handleClearClick = ()=>{
        let NewText = '';
        settext(NewText);
        props.showAlert("Text Cleared", "success")
    }

    const handleToCopy = () =>{
        let CopyItem = document.getElementById('myBox');
        CopyItem.select();
        navigator.clipboard.writeText(CopyItem.value);
        props.showAlert("Copied to Clipboard", "success")
    }

    const handleToRemoveSpace = ()=>{
        let NewText = text.split(/[ ]+/);
        let updatedText = NewText.join(" ")
        settext(updatedText);
        props.showAlert("Extra Spaces Removed", "success")
    }


    return (
        <>
        <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3 my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" placeholder="Enter Your Text here..." style={{backgroundColor: props.mode === 'dark'?'#050523':'white',
         color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick} >Clear Text</button>
        <button className='btn btn-primary mx-1 my-1'onClick={handleOnClick}>Convert to UPPERCASE</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleOnClick2}>Convert to lowercase</button>        
        <button className='btn btn-primary mx-1 my-1' onClick={handleToCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleToRemoveSpace}>Remove Extra Space</button>
       

        <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p> <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> Characters</p>
            <p><b>{text.length>0?0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length : '0'}</b> Minutes read </p>

            <h4>Preview</h4>
            <p >{text.length>0?text : <i>"Eneter your Text in box to Preview it here"</i>}</p>
            </div>

    
    </>
    );
}

export default Maincontainer;

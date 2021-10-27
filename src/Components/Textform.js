import React,{useState} from 'react';

export default function Textform(props) {
    let defaultTheme=true;
    
    const [text,setText]=useState("");

    function handleOnChange(event){
        console.log(event)
        setText(event.target.value);
    }
    function handleUpClick(){
        let upperText=text.toUpperCase();
        setText(upperText);
        props.showAlert("Text has been UpperCased","success");
    }
    function handleLoClick(){
        let lowerText=text.toLowerCase();
        setText(lowerText);
        props.showAlert("Text has been LowerCased","success");
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        props.showAlert("Text has been Cleared","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges(); // This is to deselect the text after copying it to clipboard
        props.showAlert("Copied To Clipboard","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
         setText(newText.join(" ")); 
    }
    
    return (
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2 className='my-2'>{props.heading}</h2>
        <div className="mb-3 my-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(31 31 31)':'white'}} value={text} onChange={handleOnChange} rows="15"></textarea>
        </div>   
        <button className="btn btn-primary mx-1 my-1" disabled={text==''} onClick={handleUpClick}>Turn into UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text==''} onClick={handleLoClick}>Turn into Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text==''} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text==''} onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text==''} onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Text Summary</h2>
            <p>Word Count-{text.split(/\s+/).filter((element)=>{return element.length!=0}).length}, Character Count-{text.split("").filter((element)=>{return element.length!=0}).length}</p>
            <p>{(text.split(" ").filter((element)=>{return element.length!=0}).length*0.008).toFixed(2)}Minutes Read</p>
            <h2>Text Preview</h2>
            <p>{text==''?"Enter some text above to preview":text}</p>
        </div>
        </>
    )
}



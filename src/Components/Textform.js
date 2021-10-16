import React,{useState} from 'react';

export default function Textform(props) {
    let defaultTheme=true;
    
    const [text,setText]=useState("");
    // text="Enter text here3";     //This is a wrong way to change text, always change state variable using setText//
    //setText("Enter text here4");    //This is a right way to change text, always change state variable using setText//

    function handleOnChange(event){
        // console.log("OnChange")
        console.log(event)
        setText(event.target.value);
    }
    function handleUpClick(){
        // console.log("Uppercase Button is clicked")
        let upperText=text.toUpperCase();
        setText(upperText);
        props.showAlert("Text has been UpperCased","success");
    }
    function handleLoClick(){
        // console.log("Uppercase Button is clicked")
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
        console.log("I am copy");
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard","success");
    }
    
    return (
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(31 31 31)':'white'}} value={text} onChange={handleOnChange} rows="15"></textarea>
        </div>   
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Turn into UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Turn into Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Text Summary</h2>
            <p>Word Count-{text.split(" ").length}, Character Count-{text.length}</p>
            <p>{(text.split(" ").length*0.008).toFixed(2)} Minutes Read</p>
            <h2>Text Preview</h2>
            <p>{text==''?"Enter some text above to preview":text}</p>
        </div>
        </>
    )
}



import React from 'react'

export default function CustomMode(props) {
    return (
      <div className="d-flex flex-row-reverse">
        <div className="bg-primary rounded mx-2 customMode" onClick={()=>{props.toggleCustomMode('primary')}} style={{height:'20px' ,width:'20px'}}></div>
        <div className="bg-secondary rounded mx-2 customMode" onClick={()=>{props.toggleCustomMode('secondary')}} style={{height:'20px' ,width:'20px'}}></div>
        <div className="bg-success rounded mx-2 customMode" onClick={()=>{props.toggleCustomMode('success')}} style={{height:'20px' ,width:'20px'}}></div>
        <div className="bg-danger rounded mx-2 customMode" onClick={()=>{props.toggleCustomMode('danger')}} style={{height:'20px' ,width:'20px'}}></div>
        <div className="bg-warning rounded mx-2 customMode" onClick={()=>{props.toggleCustomMode('warning')}} style={{height:'20px' ,width:'20px'}}></div>
      </div>
    );
}

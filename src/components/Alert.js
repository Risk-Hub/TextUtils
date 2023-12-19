import React from 'react'

export default function Alert(props){
    return (
        <>
            <div className="alert alert-success container" style={{height: "fit-content",marginBottom: "0",visibility: props.alert}} role="alert">
                <b>Success</b>: Text Copied!
            </div>
        </>
    );
}
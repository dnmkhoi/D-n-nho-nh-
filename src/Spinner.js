import React from 'react';

export default function Spinner({loading}) {
    return (
        (loading ? 
            <div style={{"position":"fixed","width":"100vw","height":"100vh","overflow":"auto","left":"0px","top":"0px","zIndex":"5000","background":"#cbcbc18a"}}>
                <span className="css-spinner"></span>
            </div> : null
        )
    )
}
import React from "react";

const Header =(props)=>{
console.log("header props",props);
    return(
        <header style = {{height:"100px", backgroundColor:"lightGray", display:"flex",justifyContent:"space-between", alignItems:"center"}}>
            <div>
                <img 
                style ={{height:"100px",}}
                src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"/>

            </div>
        <p>{props.username}</p>
        </header>
    )
}
export default Header;
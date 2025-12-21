import './PlayButton.css'
import {useState} from 'react';

function PlayButton({message,children,onPlay,onPause}){
    //  let playing = false; //dont usse this approach

    console.log('render playButton ')  //for checking herarchy only this code running

    const[playing ,setPlaying] =useState(false);

   function handleClick(e){
    // console.log(e)
    e.stopPropagation()

    if(playing) onPause()
    else  onPlay();

    // playing =!playing
    setPlaying(!playing)  //state variable modified by setter 
   }

   return (
                     //event handler function
                     //due to arrow fuction play will show click no
                     //or can handle with eventhandler
       <button onClick={handleClick}>{children} : {playing ? '⏸️' : '▶️'}</button>
   )

}

export default PlayButton;
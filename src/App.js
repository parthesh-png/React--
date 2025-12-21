 import "./App.css";
 import {useState} from 'react';
 import Counter from './component/counter'
import PlayButton from "./component/PlayButton";
import Video  from "./component/video";
import videoDB from'./data/data';   //improting is default so anyname can be 

function App(){
console.log('render App')

const[videos,setVideos] =useState(videoDB)

return(
  <div className="App"  onClick={()=>console.log('App')}>
 <div>  



  <button onClick={()=>{
   
     setVideos( [...videos,{     //copy of old then added new in it
      id:videos.length+1, 
    title:'Demo js tutorial',
    views :'990k', 
    time:'9 year old',
    channel:'Coder Dost',
    verified :true 

    }])

  }}>Add Video</button>
 </div>

 {
  videos.map(video=><Video    //video is itrator here 
    key ={video.id}
    title = {video.title}
      views = {video.views}
        time = {video.time}
        channel= {video.channel}
        verified={video.verified}
        id={video.id}
 >

  <PlayButton  
   onPlay={()=>console.log('playing..',video.title)}  
   onPause={()=>console.log('pause',video.title)}
   >{video.title}
   
   </PlayButton>
 </Video>)
 }

       {/* clear :both - break the flow od css after any div come after that  */}
 <div style = {{clear:'both'}}>   
 </div>
{/* <Counter>add</Counter> */}










 </div>
)

}


export default App;


























  // chapter- 1
// import './App.css';

// function App() {  //it is main as it is connected with react

//   let name='react app'
//   let className='App-header'    //its a css class 
//   console.log('App')     //to check it execution in console
//   return (
//     <div className="App">
//       <div className={className}>
//       {name}     
//        <Demo></Demo>

//       </div>
    
//     </div>
//   );
// }

// function Demo() { 
//   console.log('Dejmo')
//   return (
//     <div className="App">
//       <div className='App-header'>
//      Demo

//       </div>
    
//     </div>
//   );
// }

// export default App;

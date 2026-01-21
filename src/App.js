 import "./App.css";
 import {useReducer, useState} from 'react';
// //  import Counter from './component/counter'
// import PlayButton from "./component/PlayButton";
// import Video  from "./component/video";
import videoDB from'./data/data';   //improting is default so anyname can be 
import AddVideo from "./component/AddVideo";
import VideoList from "./component/VideoList";




function App(){
console.log('render App')
const[editableVideo,setEditableVideos] =useState(null)

function videoReducer(videos,action){   //it return switch
  switch(action.type){
    case 'ADD':
      return   [...videos,
        {...action.payload,id:videos.length+1}
     ]

    case 'DELETE':
      return videos.filter(video=>video.id!==action.payload)

    case 'UPDATE':
        const index = videos.findIndex(v => v.id===action.payload.id)
          const newVideo = [...videos]

        newVideo.splice(index,1,action.payload)  
        setEditableVideos(null)   //for reset button after editing 
        return newVideo;  //return is break

     default:
     return videos

  

  }
}

 const [videos,dispatch] =useReducer(videoReducer,videoDB)

// const[videos,setVideos] =useState(videoDB)





//ADDING VIDEO 
/******************************* */
//using useState and effect add work 


// function addVideos(video){           //array 



//      setVideos([
//       ...videos,
//         {...video,id:videos.length+1}
//      ])

// }

/********************************* */

//usig usereduce 

function addVideos(video){           

//action : {type : add , payload :video }
dispatch({type: 'ADD' , payload:video})   //it need add and video


}


//DELETE VIDEO

//****************************/
//useing use state 

// function deleteVideo(id){

//  setVideos(videos.filter(video=>video.id!==id))  //itrator
  

// }

/***************************************/ 

//Using USE REDUCER 
function deleteVideo(id){

 dispatch({type: 'DELETE' , payload:id})
  

}





function editVideo(id){
  setEditableVideos(videos.find(video =>video.id===id))


}



//UPDATE - VIDEO 

/***************** */
// function updateVideo(video){
//   const index = videos.findIndex(v => v.id===video.id)
//   const newVideo = [...videos]

//  newVideo.splice(index,1,video)
// setVideos(newVideo)
// }

/******************************** */

 //REducer
 function updateVideo(video){

  dispatch({type:'UPDATE',payload:video})
  

}









return(
  <div className="App"  onClick={()=>console.log('App')}>

    {/* props created here now it will lift */}

  <AddVideo addVideos ={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>   

   <VideoList editVideo ={editVideo}   deleteVideo={deleteVideo} videos={videos}></VideoList>
  
   

  
                     
 {/* <div>  
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
 </div> */}





 {/* {
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
 } */}









       {/* clear :both - break the flow od css after any div come after that  */}
 {/* <div style = {{clear:'both'}}>   
 </div> */}
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

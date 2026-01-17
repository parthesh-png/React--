import  './video.css'


function Video({title,id,channel="coder",views,time,verified,children,deleteVideo,editVideo}){
   // let topic = "React js "
   //  bgColor='blue'    due to this what everr we color assign it will show blue 


   // let verified = true;

  

    

return(
 <> 
 <div className='container'>
   <button className= "Close" onClick={()=>deleteVideo(id)}> X </button>
   <button className= "edit" onClick={()=>editVideo(id)}> Edit </button>

 <div className="pic">
    <img src ={`https://picsum.photos/id/${id}/160/90`} alt = "yaahu"/> 
 </div>

 <div className ="title">{title} js tutorial</div>

 <div className="channel"> {channel}  {verified && '✅'} </div> 
 
 <div className="views"> 
   {views} views  <span>.</span> {time}

   <div>
      {children}
   </div>
</div> 
  
</div>

 </>
 

)

}


export default Video;  
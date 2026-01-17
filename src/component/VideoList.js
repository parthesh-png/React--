import Video from"./video";
import PlayButton from "./PlayButton";


function VideoList({videos,deleteVideo,editVideo}){


    return (
        <>

                        {                          //props from here taken to video.js
                videos.map(video=><Video    //video is itrator here ( this send prop to video)
                    key ={video.id}            //video tag itrate 3 times 
                    title = {video.title}            //here just passed va;ue 
                    views = {video.views}
                        time = {video.time}
                        channel= {video.channel}
                        verified={video.verified}
                        id={video.id}
                        deleteVideo={deleteVideo}
                        editVideo={editVideo}
                >

                <PlayButton  
                onPlay={()=>console.log('playing..',video.title)}  
                onPause={()=>console.log('pause',video.title)}
                >{video.title}
                
                </PlayButton>
                </Video>)
                }

      </>  

    )
}

export default VideoList
import Video from"./video";
import PlayButton from "./PlayButton";


function VideoList({videos}){


    return (
        <>

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

      </>  

    )
}

export default VideoList
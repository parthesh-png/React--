import './AddVideo.css'
import {useState} from 'react'

const initialState ={

                     views :'990k', 
                     
                      channel:'Coder Dost',
                      verified :true,
                      title:"",
                      views:""  
}

function AddVideo({addVideos}){    //addvideos is prop

        const [video, setVideo] = useState(initialState); //initial value set in useState




      function handlesubmit(e)  {
         e.preventDefault();   //default behavior of form reload , to stop it 
         addVideos(video)
         setVideo(initialState)
         // console.log(video)

      }





      function handleChange(e){  //for caputring the value inserted in block we use (e)
      //   console.log(e.target.name ,e.target.value) //no of time we write any thing it update at every word


       //sette r function :inclue old object too
          setVideo({...video,
            [e.target.name] : e.target.value  //this bracket tell js tell evlaue then make key 
          })
          console.log(video)  //state is asyc so it render nest time like vv typed then show only v 
      }




  return (
         <form>
            <input
             type ="text"
              name="title" 
              onChange={handleChange}
               placeholder='title'
               value={video.title}
            />
               {/* {video.title}      for chekcing test update */}


            <input type ="text"
             name = "views"
              onChange={handleChange} 
              placeholder='views'
              value = {video.views}
            />
            <button 
                  onClick = {handlesubmit}


            
            // onClick={()=>{
   
            //         // setVideos( [...videos,{     //copy of old then added new in it
            //         // id:videos.length+1, 
            //         // title:'Demo js tutorial',
            //         // views :'990k', 
            //         // time:'9 year old',
            //         // channel:'Coder Dost',
            //         // verified :true 

            //         // }]);

            //     }}
            >
                    
                    Add Video
                    
           </button>

      </form> 



    )


     
    
}

export default AddVideo;
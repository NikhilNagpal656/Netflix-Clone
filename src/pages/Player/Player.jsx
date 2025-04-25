import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const{id} = useParams();
  const navigate = useNavigate();

  const[apidata,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGYxNDg5NjQzNWQ3YTUyODFhYzZkNDA3MWNiMWRkOSIsIm5iZiI6MTc0NTI5OTg1MS44NjcsInN1YiI6IjY4MDcyOThiYjJiNzIyYWVkZjg5OWNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qy6CyFj-XEOJuPLUXAz4xygd_bCCRYGVk3EVXux3-d8'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  


  return (
    <div className='Player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height="90%" src={`https://www.youtube.com/embed/${apidata.key}`}
      title='trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>

      </div>
    </div>
  )
}

export default Player
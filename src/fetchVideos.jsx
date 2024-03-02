import {useEffect} from 'react'
import {useState} from 'react'

export default function Videos() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async() =>{
            try {
                const query = 'cats';
                const API_key = import.meta.env.VITE_APIkey;
                const API_url = `https://www.googleapis.com/youtube/v3/search?key=${API_key}&part=snippet&q=${query}&type=video`;
                const response = await fetch(`${API_url}?key=${API_key}&maxResults=28`);
                const data = await response.json();
                setVideos(data.items);
            }
            catch(error) {
                console.log(`Error fetching ${query} videos.`, error);
            }  
    };
      fetchVideos();
    }, []);

  return (
    <div>
      <div className="video-list">
        { videos.map(video => (
          <div key={video.id.videoId} className="video-container">
            <iframe
              title={video.snippet.title}
              width="160"
              height="90"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
                                                                  
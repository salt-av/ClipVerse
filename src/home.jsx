import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Homepage() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async() =>{
            try {
                const query = 'pink panther';
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
    return(<div className="videos">
        <section className="video-section">
        { videos.map(video => (
            <article className="video-container">
               <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} className="thumbnail" data-duration="3:14">
                <img class="thumbnail-image" src={video.snippet?.thumbnails?.medium?.url} alt={video.snippet?.title} />
               </a> 
               <div className="video-bottom-section">
                <a href={`https://www.youtube.com/channel/${video.snippet?.channelId}`}>
                    <img className="channel-icon" src={video.snippet?.channelThumbnails?.medium?.url} alt={video.snippet?.channelTitle} />
                </a>
                <div className="video-details">
                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} className="video-title">{video.snippet.title}</a>
                    <a href={`https://www.youtube.com/channel/${video.snippet?.channelId}`} className="video-channel-name">{video.snippet?.channelTitle}</a>
                    <div className="video-metadata">
                        <span>{video.statistics?.viewCount} views </span>
                        •
                        <span> {new Date(video.snippet?.publishedAt).toLocaleDateString()}</span>
                    </div>
                </div>
               </div>
            </article>
        ))}
        </section>
    </div>)
}

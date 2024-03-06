import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Homepage() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async() =>{
            try {
                const query = 'cats';
                const API_key = import.meta.env.VITE_APIkey;
                const API_url = `https://www.googleapis.com/youtube/v3/search?key=${API_key}&part=snippet&q=${query}&type=video`;
                const response = await fetch(`${API_url}?key=${API_key}&maxResults=5`);
                const data = await response.json();
                setVideos(data.items);
            }
            catch(error) {
                console.log(`Error fetching ${query} videos.`, error);
            }  
    };
      fetchVideos();
    }, []);
    return(<div className="home-page">
        <header className="header">
            <a href="#">
                <img src="./logo.png" alt="Clipverse" className="Clipverse-logo" />
            </a>
            <form className="search-bar">
                <input className="search-input" type="search"
                    placeholder="What'u lookin for today?"
                    aria-label="Search" />
                <button type="submit" className="search-btn">
                    <img src="./magnify.svg" />
                </button>
            </form>
            <div className="menu-icons">
                <a href="#">
                    <img src="./video-plus.svg" alt="Upload Video" />
                </a>
                <a href="#">
                    <img src="./apps.svg" alt="Apps" />
                </a>
                <a href="#">
                    <img src="./bell.svg" alt="Notifications" />
                </a>
                <a href="#">
                    <img className="menu-channel-icon" src="http://unsplash.it/36/36?gravity=center" alt="Your Channel" />
                </a>
            </div>
        </header>
        <div className="categories">
            <section className="category-section">
                <button className="category">All</button>
                <button className="category">Category 1</button>
                <button className="category">Category 2</button>
                <button className="category">Category 3</button>
                <button className="category">Category 4</button>
                <button className="category">Category 5</button>
                <button className="category">Category 6</button>
                <button className="category">Category 7</button>
                <button className="category">Category 8</button>
                <button className="category">Category 9</button>
            </section>
        </div>
        <div className="videos">
            <section className="video-section">
                { videos.map(video => (
                    <article className="video-container">
                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src={video.snippet?.thumbnails?.medium?.url} alt={video.snippet?.channelTitle} />
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
            <section className="video-section">
                <h2 className="video-section-title">
                    Videos worth watching 
                    <button className="video-section-title-close">&times;</button></h2>
            
                    { videos.map(video => (
                    <article className="video-container">
                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} className="thumbnail" data-duration="3:14">
                        <img className="thumbnail-image" src={video.snippet?.thumbnails?.medium?.url} alt={video.snippet?.channelTitle} />
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
        </div>
    </div>)
}

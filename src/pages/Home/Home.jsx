import React, {useEffect, useState, useRef} from "react";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton/SecondaryButton";
import TitleImage from '../../assets/images/TitleImage.png'
import {HomeWrap, Whole} from "./Home.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import TrendingVideos from "../../components/TrendingVideos/TrendingVideos";
import {data} from '../../data'


function Home(){


    const [mainContent, setMainContent] = useState(null);
    const [showVideo, setShowVideo] = useState(false); 
    const videoRef=useRef();

    const changeContent = (item) => {
        sessionStorage.setItem("last_movie_id", item.Id);
        setMainContent(item);
    };

    useEffect(() => {
        const lastMovieId = sessionStorage.getItem("last_movie_id");
        if (lastMovieId) {
            const lastMovie = data.TendingNow.find(movie => movie.Id === lastMovieId);
            if (lastMovie) {
                setMainContent(lastMovie);
            }
        }
    }, []);

    useEffect(() => {
        if (mainContent?.VideoUrl) {
            const timer = setTimeout(() => {
                setShowVideo(true); 
            }, 2000); 
            return () => clearTimeout(timer);
        }
    }, [mainContent]);

    useEffect(() => {
        if (showVideo && videoRef.current) {
            const videoElement = videoRef.current;
            const tryPlayVideo = () => {
                videoElement.play().catch((error) => {
                    console.error(error);
                });
            };
            videoElement.muted = true;
            tryPlayVideo();
            const handleUserInteraction = () => {
                videoElement.play().catch((error) => {
                    console.error(error);
                });
            };
            document.addEventListener("click", handleUserInteraction);
            return () => {
                document.removeEventListener("click", handleUserInteraction);
            };
        }
    }, [showVideo]);
 

    const convertSecondsToHoursAndMinutes = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const remainingMinutes = Math.floor((seconds % 3600) / 60);
       return `${hours} h ${remainingMinutes} m`;
     };

     const renderData=()=>(
        <>
          <Sidebar />
            <div className="inside">
                <div className="main">
                    <h2>{mainContent?.Category || "Movie"}</h2>
                    <div className="title">
                        <img src={TitleImage} alt="Title" />
                    </div>
                    <div className="credentials">
                        <span>{mainContent?.ReleaseYear || "2021"}</span>
                        <span>{mainContent?.MpaRating || "18+"}</span>
                        <span>{mainContent ? convertSecondsToHoursAndMinutes(mainContent?.Duration) : "1h 48m"}</span>
                    </div>
                    <h1>
                         {mainContent?.Description || 
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                    </h1>
                    <div className="btnsDiv">
                        <PrimaryButton>Play</PrimaryButton>
                        <SecondaryButton>More Info</SecondaryButton>
                    </div>
                 </div>
                <TrendingVideos onChangeContent={changeContent}/>
            </div>
        </>
     )

    return(
         
        <HomeWrap>
               {mainContent?.VideoUrl && showVideo ?(
                    <video id="backgroundVideo"   autoplay ref={videoRef}
                         className={"backgroundVideo"}  playsInline loop preload="auto">
                        <source src={mainContent?.VideoUrl} type="video/mp4" />
                     </video>
            ) :  <Whole> {renderData()}</Whole>
          }  
        </HomeWrap>
    )
}

export default Home;


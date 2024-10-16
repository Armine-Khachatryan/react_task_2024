
import React, { useState, useEffect } from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { data } from '../../data';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import classes from './trendingVideos.module.css'




function TrendingVideos(props){

    const [trendingVideos, setTrendingVideos] = useState([]);

    useEffect(() => {
        const sortedVideosByLatestDate=data.TendingNow.sort((a,b)=>
        new Date(b.Date)-new Date(a.Date));
        let limit=sortedVideosByLatestDate.slice(0,50);
        if (sessionStorage.getItem('last_movie_id')) {
            const lastClicked = sessionStorage.getItem('last_movie_id');
            const sorted = [...limit];
            let removedItem;
            const sortedCut = sorted.filter((item) => {
              if (item.Id === lastClicked) {
                removedItem = item;
                return false;
              } else {
                return true;
              }
            });
            let newArray=[removedItem, ...sortedCut];
            setTrendingVideos(newArray);
            props.onChangeContent(removedItem)
        }
        else{
            setTrendingVideos(limit);
        }
}, []);


    const renderSlides =trendingVideos?.map((item, index)=>(
        <SwiperSlide
            key={item.id}
            className={"tradingVideoSlide"}>
            <div className='tradingImg'
             onClick={()=>{props?.onChangeContent(item)}}>
                <img src={item.CoverImage} alt={`Cover ${index}`} />
            </div>
        </SwiperSlide>
    ))



    return(
        <>
            <div className={classes.title}>Trending Now</div>
            <Swiper
                slidesPerView={8}
                spaceBetween={10}
                keyboard={{ enabled: true }}
                modules={[Keyboard, Pagination, Navigation]}
                pagination={{
                    clickable: true
                }}
                navigation={true}
            >
                    {renderSlides}
                
            </Swiper>
        </>
    )
}


export default TrendingVideos;

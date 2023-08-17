import React from "react";

//외부 css import
//import './Movie.css';


// 영화 정보를 출력하는 컴포넌트
// 영화 포스터 , 영화 제목 , 영화의 평점 

// 영화의 포스터를 제공해주는 사이트 URL
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/" //const : 상수 / java : final

export default function Moive ({title , poster_path , vote_average}) {

    return (
    <div className = "movie-container">
        <img src = {IMG_BASE_URL + poster_path} alt="영화 포스터" />
        <div className = "movie-info">
            <h4>{title}</h4>
            <span>{vote_average}</span>
        </div>


    </div>);
}

//export default Moive;
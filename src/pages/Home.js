import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보이는 페이지입니다.</p>
            <ul>
                <li><Link to={"/about"}>소개</Link></li>
                <li><Link to={"/profiles/gildong"}>홍길동</Link></li>
                <li><Link to={"/profiles/velopert"}>김민준</Link></li>
                <li><Link to={"/articles"}>게시글 목록</Link></li>
            </ul>

        </div>
    );
};

export default Home;
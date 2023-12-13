import React from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

const About = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail')
    const mode = searchParams.get('mode')

    const onToggleDetail = () => {
        setSearchParams({
            mode: mode,
            detail : detail !== 'true'
        })
    }

    const onAddMode = () => {
        setSearchParams({
            detail: detail,
            mode: parseInt(mode) + 1
        })
    }

    return (
        <div>
           <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 용도입니다.</p>
            <p>쿼리: {location.search}</p>
            <p>{detail}</p>
            <p>{mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onAddMode}>mode add</button>
        </div>
    );
};

export default About;
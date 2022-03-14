import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import MovieBox from "../components/MovieBox";

const Wrapper = styled.div`
    width: 100%;
    padding: 60px 220px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    flex-wrap: wrap;
`;

const MyApp = () => {

    const [list, setList] = useState([]);

    const getMovie = async() => {
        const movies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6f468133ad08eef8c7a50210567d8a1b&language=en-US")

        setList(movies.data.results);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
    <Wrapper>
       {list.map((m, idx) => <MovieBox key={idx} title={m.original_title} vote={m.vote_average} over={m.overview} posterPath={m.poster_path}/>)}
    </Wrapper>
    )
};

export default MyApp;
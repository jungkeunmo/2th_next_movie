import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 350px;
    min-width: 400px;
    height: 210px;
    background-color: #eee;
    margin: 40px;

    border-radius: 7px;
    box-shadow: 2px 2px 4px #999;

    padding: 5px;

    display: flex;
    flex-direction: row;
`;

const PosterDiv = styled.div`
    width: 120px;
    height: 100%;
`;

const ContentDiv = styled.div`
    width: calc(100% - 120px);
    height: 100%;
`;

const PosterImg = styled.img`
    width: 130px;
    object-fit: cover;

    margin-top: -20px;
    margin-left: -20px;

    border-radius: 7px;

    box-shadow: 4px 4px 2px #999;
`;

const Titile = styled.div`
   font-weight: bold;
   margin-bottom: 7px;

   font-size: 16px;
`;

const Vote = styled.div`
   font-size: 13px;
   color: #999;
   
   margin-bottom: 6px;
`;

const Overview = styled.div`
   word-break: break-all;
   color: #999;

   font-size: 12px;
`;

const MovieBox = ({ title, vote, over, posterPath}) => {
    return (
        <Box>
            <PosterDiv>
                <PosterImg src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
            </PosterDiv>
            <ContentDiv>
                <Titile>🥕{title}</Titile>
                <Vote>⭐️{vote}</Vote>
                <Overview>
                    {over.length > 120 ? over.substring(0, 120) + "..." : over}
                </Overview>
            </ContentDiv>
        </Box>
    )
};

export default MovieBox;
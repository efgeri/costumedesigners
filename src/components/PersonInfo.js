import React from "react";
import styled from "styled-components";

const PersonInfo = ({ person, personInfo, getFilmInfoSheet }) => {
  console.log(person)
  
  const getPersonFilmList = personInfo.credits.crew.map((film) => {

    return (<>
    <div className="moviebox"><li className="movietitle"><strong>{film.original_title}</strong></li>
    <img onClick={() => {getFilmInfoSheet(film.id)}} src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={`${film.title}`}></img>
    {/* I have to figure out how to get a smaller film poster */}</div>
    </>
    );
  });

  return (
    <div>
      <h4>Movies they worked on</h4>
      <p>{personInfo.name}</p>
      <FlexList className="person-info">{getPersonFilmList}</FlexList>
    </div>
  );
};

export default PersonInfo;

const FlexList = styled.ul`
display: flex;
flex-wrap: wrap;
line-height: 2;
list-style: none;
width: 100%
`

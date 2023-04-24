import React from "react";
import { useState, useEffect } from "react";
import PeopleList from "../components/PeopleList";
import PersonInfo from "../components/PersonInfo";
import FilmInfo from "../components/FilmInfo";
import styled from "styled-components";


const DataContainer = () => {
  const apikey = process.env.REACT_APP_KEY;
  const [decadeList, setDecadeList] = useState([]);
  const [filmCrewData, setFilmCrewData] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [personInfo, setPersonInfo] = useState(null);
  const [filmInfoSheet, setFilmInfo] = useState(null);
  const [counter, setCounter] = useState(0);
  

  useEffect(() => {
    loadFilmCrewData();
  }, [decadeList]);

  const loadDecade = function (firstYear, lastYear) {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${firstYear}-01-01&primary_release_date.lte=${lastYear}-12-31&vote_count.gte=3000&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((filmList) => {
        setDecadeList(filmList.results);
      });
      let copyCounter = counter
      copyCounter ++
      setCounter(copyCounter)
  };

  const loadFilmCrewData = async function () {
    const getFilmUrls = decadeList.map((film) => {
      return `https://api.themoviedb.org/3/movie/${film.id}/credits?api_key=${apikey}&language=en-US`;
      // this works, correct elements
    });
    const newCrewList = await Promise.all(
    getFilmUrls.map((url) => {
      let copyCounter = counter
      copyCounter += 20
      setCounter(copyCounter)
      return fetch(url)
        .then((res) => res.json())
        .then((crewList) => crewList.crew);
    }));
 
    setFilmCrewData(newCrewList);
  };

  const loadSelectedPerson = function (person) {
    fetch(
      `https://api.themoviedb.org/3/person/${person.id}?api_key=${apikey}&language=en-US&append_to_response=credits`)
      .then((res) => res.json())
      .then((personInfo) => {
        setPersonInfo(personInfo);
      });
      let copyCounter = counter
      copyCounter ++
      setCounter(copyCounter)
  };

  const getFilmInfoSheet = (filmid) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filmid}?api_key=${apikey}&language=en-US`)
      .then((res) => res.json())
      .then((filmInfo) => {
        setFilmInfo(filmInfo);
      });

    
  }

  const onPersonSelect = function(person) {
    setSelectedPerson(person)
    loadSelectedPerson(person)
  } 

  const decadeListItems = decadeList.map((film) => {
    return <li>{film.title}</li>;
  });
  console.log(filmInfoSheet)

  return (
    <>
      {/* <button onClick={() => {loadFilmCrewData()}}>Load film crew</button> */}
    <NavBar className="navigation">
      <button onClick={() => {loadDecade(1950, 1959)}}>Load 50s film crew</button>
      <button onClick={() => {loadDecade(1960, 1969)}}>Load 60s film crew</button>
      <button onClick={() => {loadDecade(1970, 1979)}}>Load 70s film crew</button>
      <button onClick={() => {loadDecade(1980, 1989)}}>Load 80s film crew</button>
      <button onClick={() => {loadDecade(1990, 1999)}}>Load 90s film crew</button>
      <button onClick={() => {loadDecade(2000, 2009)}}>Load 00s film crew</button>
      <button onClick={() => {loadDecade(2010, 2019)}}>Load 2010s film crew</button>
      <button onClick={() => {loadDecade(2020, 2023)}}>Load 2020s film crew</button>
    </NavBar>
      <h2>Most popular movies of the decade</h2>
      <ul>{decadeListItems}</ul>
      <PeopleList  filmCrewData={filmCrewData} onPersonSelect={onPersonSelect}/>
      {personInfo ? <PersonInfo getFilmInfoSheet={getFilmInfoSheet} person={selectedPerson} personInfo={personInfo}/> : null}
      {filmInfoSheet ? <FilmInfo filmInfo={filmInfoSheet}/> : null}
      <h3>Number of requests since refresh: {counter}</h3>
      </>
  );
};

export default DataContainer;

const NavBar = styled.nav`
background-color: var(--clr-accent);
display: flex;
flex-wrap: wrap;
padding: 2em;
justify-content: space-between;
`



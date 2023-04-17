import React from "react";

const PersonInfo = ({ person, personInfo }) => {
    console.log(personInfo)
    console.log(personInfo.credits)
  const getPersonFilmList = personInfo.credits.crew.map((film) => {

    return (<>
    <li>{film.original_title}</li>
    <img src={`https://image.tmdb.org/t/p/w185/${film.poster_path}`} alt={`${film.title}`}></img>
    {/* I have to figure out how to get a smaller film poster */}
    </>
    );
  });

  return (
    <div>
      <h4>Person Info</h4>
      <p>{person.id}</p>
      <p>{personInfo.name}</p>
      <p className="person-info">{getPersonFilmList}</p>
    </div>
  );
};

export default PersonInfo;

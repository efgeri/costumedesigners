import React from "react";
import Person from "./Person";

const PeopleList = ({ filmCrewData, onPersonSelect }) => {
  const peopleListItems = filmCrewData.map((items, index) => {
    return <Person items={items} key={index} onPersonSelect={onPersonSelect}/>
  })

  return (
    <>
      <h3>PeopleList </h3>
      <ul>{peopleListItems}</ul>
    </>
  );
};

export default PeopleList;
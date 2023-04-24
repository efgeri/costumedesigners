import React from "react";
import Person from "./Person";
import styled from "styled-components";

const PeopleList = ({ filmCrewData, onPersonSelect }) => {
  const peopleListItems = filmCrewData.map((items, index) => {
    return <Person items={items} key={index} onPersonSelect={onPersonSelect}/>
  })

  return (
    <>
      <h3>PeopleList </h3>
      <List>{peopleListItems}</List>
    </>
  );
};

export default PeopleList;

const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
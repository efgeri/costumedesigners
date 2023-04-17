import React from "react";

const Person = ({items, onPersonSelect}) => {



    const getCostumePerson = items.map((person) => {
        if (person.job==="Costume Design") {
            return <li><button onClick={() => {onPersonSelect(person)}}>{person.name}</button></li>
        }
    })
    


    return (
        <div>
        {getCostumePerson}
        </div>
        )
}

export default Person;
import styled from "styled-components";

const FilmInfo = ({filmInfo}) => {
    console.log(filmInfo)
    return ( 
        <section className="filmsheet">
        <h1><a target="_blank" href={`https://www.imdb.com/title/${filmInfo.imdb_id}`}>{filmInfo.title}</a></h1>
        <StyledList>
            <li>{filmInfo.overview}</li>
            <li>{filmInfo.release_date}</li>
        </StyledList>
        </section>
     );
}
 
export default FilmInfo;

const StyledList = styled.ul`
list-style: none;
`
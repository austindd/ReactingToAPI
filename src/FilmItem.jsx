import React from 'react';
import FilmObj from './Utils';

const FilmItem = (props) => {

    console.log(props);

    let myFilmObj = new FilmObj(
        props.filmObj.description,
        props.filmObj.director,
        props.filmObj.id,
        props.filmObj.locations,
        props.filmObj.people,
        props.filmObj.producer,
        props.filmObj.release_date,
        props.filmObj.rt_score,
        props.filmObj.species,
        props.filmObj.title,
        props.filmObj.url,
        props.filmObj.vehicles,
    );
    
    let cardStyles = {
        title: {
            fontFamily: 'Kaushan Script, cursive',
            color: '#1b2035',
            fontWeight: 'bold',
        },
        text: {
            fontSize: '14px',
            fontFamily: 'Play, sans-serif',
        },
        credits: {
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Play, sans-serif',
        }
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <a href={String(myFilmObj.url)} rel='noopener noreferrer' target='_blank' className='btn'><h6 className='card-title' style={cardStyles.title}>{String(myFilmObj.title)}</h6></a>
                <p className='card-text' style={cardStyles.text}>{String(myFilmObj.description)}</p>
                <p className='card-text' style={cardStyles.credits}>Director: {String(myFilmObj.director)} | Producer: {String(myFilmObj.producer)}</p>
            </div>
        </div>
    );

}


export default FilmItem;
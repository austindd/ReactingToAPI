import React, { Component } from 'react';
import FilmObj from './Utils';
import { Button, Collapse } from 'reactstrap';

class FilmItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse1: false,
            collapse2: false,
        }

        this.myFilmObj = new FilmObj(
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

        this.cardStyles = {
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
            },
            collapse1Btn: {
                margin: '1rem',
            },
        };
        this.toggle1 = this.toggle1.bind(this);
    }
    toggle1() {
        this.setState({ collapse1: !this.state.collapse1 })
    }
    render() {
        return (
            <div>
                <Button color='dark' onClick={this.toggle1} style={this.cardStyles.collapse1Btn}>{String(this.myFilmObj.title)}</Button>
                <Collapse isOpen={this.state.collapse1}>
                    <div className='card'>
                        <div className='card-body'>
                            <a href={String(this.myFilmObj.url)} rel='noopener noreferrer' target='_blank' className='btn'>
                                <h6 className='card-title' style={this.cardStyles.title}>{String(this.myFilmObj.title)}</h6>
                            </a>
                            <p className='card-text' style={this.cardStyles.text}>{String(this.myFilmObj.description)}</p>
                            <p className='card-text' style={this.cardStyles.credits}>Director: {String(this.myFilmObj.director)} | Producer: {String(this.myFilmObj.producer)}</p>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}


export default FilmItem;
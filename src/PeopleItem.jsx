import React, { Component } from 'react';
import { PeopleObj } from './Utils';
import { Button, Collapse } from 'reactstrap';

class PeopleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse1: false,
            collapse2: false,
        }

        this.myPeopleObj = new PeopleObj(
            props.peopleObj.id,
            props.peopleObj.name,
            props.peopleObj.gender,
            props.peopleObj.age,
            props.peopleObj.eye_color,
            props.peopleObj.hair_color,
            props.peopleObj.films,
            props.peopleObj.species,
            props.peopleObj.url,  
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
                <Button color='dark' onClick={this.toggle1} style={this.cardStyles.collapse1Btn}>{String(this.myPeopleObj.name)}</Button>
                <Collapse isOpen={this.state.collapse1}>
                    <div className='card'>
                        <div className='card-body'>
                            <a href={String(this.myPeopleObj.url)} rel='noopener noreferrer' target='_blank' className='btn'>
                                <h6 className='card-title' style={this.cardStyles.title}>{String(this.myPeopleObj.name)}</h6>
                            </a>
                            <p className='card-text' style={this.cardStyles.text}>Age: {String(this.myPeopleObj.age)} | Gender: {String(this.myPeopleObj.gender)}</p>
                            <p className='card-text' style={this.cardStyles.text}>Hair Color: {String(this.myPeopleObj.hair_color)}</p>
                            <p className='card-text' style={this.cardStyles.text}>Eye Color: {String(this.myPeopleObj.eye_color)}</p>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}
export default PeopleItem;
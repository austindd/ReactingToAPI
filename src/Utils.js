export class FilmObj {
    constructor(description = null, director = null, id = null, locations = null, people = null, producer = null, release_date = null, rt_score = null, species = null, title = null, url = null, vehicles = null) {
        this.description = description;
        this.director = director;
        this.id = id;
        this.locations = locations;
        this.people = people;
        this.producer = producer;
        this.release_date = release_date;
        this.rt_score = rt_score;
        this.species = species;
        this.title = title;
        this.url = url
        this.vehicles = vehicles;
    }
}

export class PeopleObj {
    constructor(id = null, name = null, gender = null, age = null, eye_color = null, hair_color = null, films = null, species = null, url = null) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.eye_color = eye_color;
        this.hair_color = hair_color;
        this.films = films;
        this.species = species;
        this.url = url;   
    }
}


export default FilmObj;
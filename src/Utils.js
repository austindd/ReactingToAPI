export class FilmObj {
    constructor(description = null, director = null, id = null, locations = null, people = null, producer = null, release_date = null, rt_score = null, species = null, title = null, url = null, vehicles) {
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
export default FilmObj;
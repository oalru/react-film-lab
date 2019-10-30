import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title}`);  
    }
    render(){
        return(
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
                <FilmPoster poster={this.props.film.poster_path}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{(new Date(this.props.film.release_date).getFullYear())}</p>
                </div>
                <Fave/>
            </div>
        )
    }
}

export default FilmRow;
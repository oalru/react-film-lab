import React, {Component} from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    constructor(props){
        super (props);
        this.state = {
            filter: 'all'
        }
    }
    handleFilterClick = (filter) => {
        console.log(`Setting filter to ${filter}`);
        this.setState({
            filter:filter
        })
    };
    render(){
        const allFilms = this.props.movies.films.map((item, index) => {
            return <FilmRow film={item} key={index}/>
        })
        return(
         <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')} >
                        ALL
                        <span className="section-count" >{this.props.movies.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;
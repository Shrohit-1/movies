import React, { Component } from 'react'
import {movies} from './getMovies'
export default class Banner extends Component {
  render() {
      let Allmovies= movies.results[0];

    return (

      <>
       {
           movies ===''?
           <div class="spinner-border text-primary" role="status">
             <span class="visually-hidden">Loading...</span>
            </div>:
            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${Allmovies.backdrop_path}`}   alt={Allmovies.title} className="card-img-top banner-img"/>
                {/* <div className="card-body"> */}
                    <h5 className="card-title banner-title">{Allmovies.original_title}</h5>
                    <p className="card-text banner-text">{Allmovies.overview}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
            </div>
        }
      </>
    )
  }
}

 import { movies } from "./getMovies";

 import React, { Component } from 'react'
 
 
 let Allmovies= movies.results;
 export default class Movies extends Component {

  constructor(){
    super();
    this.state={
      hover:'',
      parr:[1]
    }
  }
   render() {
     return (
       <>
            {
                Allmovies.length===0?
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div>
                    <h1 className="center-text">TRENDING</h1>
                    <div className="movies-list">
                    {
                    Allmovies.map((movieObj)=>(
                            <div className="card movies-card" key={movieObj.id} 
                            onMouseEnter={()=>{this.setState({
                              hover:movieObj.id
                            })}} 
                            onMouseLeave={()=>{
                              this.setState({
                                hover:''
                              })
                            }}
                          >
                                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}   alt={movieObj.title} className="card-img-top movies-img"/>
                                
                                <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                                <div className='button-wrapper'>
                                { 
                                 movieObj.id === this.state.hover && <a href="#" className="btn btn-primary" style={{fontSize:'10px'}}>Add To Favourite</a>
                                }
                                </div>
                            </div>
                    ))
                    }
                    </div>
                    <div style={{paddingTop:'2rem',paddingBottom:'3rem', display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>
                      <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {
                              this.state.parr.map((value)=>{
                                return (<li className="page-item"><a className="page-link" href="#">{value}</a></li>);
                              })
                            }
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                          </ul>
                      </nav>
                    </div>
                    
                </div>
            }
       </>
     )
   }
 }
 
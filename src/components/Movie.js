import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {
   addMovie=()=>
   {
    this.props.addMovie(this.props.movie.id,this.props.movie.isRented)
   }
    render() {
        let movie=this.props.movie
        return <div className='movie'><Link to={`/movie/${movie.id}`}><img src={movie.img}/></Link><button onClick={this.addMovie} className={movie.isRented?'remove':'add'}>{movie.isRented?'-':'+'}</button></div>
           
    }
}

export default Movie
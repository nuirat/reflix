import React, { Component } from 'react';
import Movie from './Movie';


class Catalog extends Component {
    constructor()
    {
        super()
        this.state={
         searchValue:''
        }
    }
    search=(event)=>{
        this.setState({
            searchValue:event.target.value.toLowerCase()
        })

    }
    render() {
        
       
        return <div>
     <input onChange={this.search} placeholder='search'></input>
     <span className='budget'>budget : {this.props.budget}$</span>
     
     {this.props.movies.filter(m=>m.isRented).length>0?   <div className='rented'>
        <div>Rented</div>
        {this.props.movies.filter(movie=>movie.isRented).filter(movie=>movie.title.toLowerCase().includes(this.state.searchValue)).map(m=><Movie movie={m} addMovie={this.props.addMovie}/>)}
     </div>:<div></div>}
     <div className='catalog'>Catalog</div>
     {this.props.movies.filter(movie=>movie.title.toLowerCase().includes(this.state.searchValue)).map(m=><Movie movie={m} addMovie={this.props.addMovie}/>)}

        </div>                
    }
}

export default Catalog;

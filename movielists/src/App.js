import './App.css';
import List from './List'
import axios from 'axios'
import React, { Component } from "react";
import MoviesList from "./MoviesList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Clock from './Clock'

function App() {
        
    let Movies = [
        {
            Title: "Tom and Jerry",
            Year: "1965",
            imdbID: "tt0274294",
            Type: "series",
            Poster: <img src="https://m.media-amazon.com/images/M/MV5BMjA3NzUwNjQwOF5BMl5BanBnXkFtZTcwMTcwNTYyMQ@@._V1_SX300.jpg"alt="s" ></img>
        },
        {
            Title: "Tom and Jerry",
            Year: "2021",
            imdbID: "tt1361336",
            Type: "movie",
            Poster: <img src= "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_SX300.jpg"alt="" ></img>
        },
        {
            Title: "The Movie",
            Year: "1992",
            imdbID: "tt0105616",
            Type: "movie",
            Poster:<img src= "https://m.media-amazon.com/images/M/MV5BMjMxYjU0NmUtOTg0NC00ZGQ5LWEwZjEtZTU4OTgwMzAwYjk5XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg" alt="" ></img>
        },
        {
            Title: "Tom & Jerry Show",
            Year: "1975–1977",
            imdbID: "tt0130417",
            Type: "series",
            Poster: <img src="https://m.media-amazon.com/images/M/MV5BMTY3ODI3MDEzMF5BMl5BanBnXkFtZTYwOTM2OTQ5._V1_SX300.jpg"alt="" ></img>
        },
        {
            Title: "The Magic Ring",
            Year: "2001",
            imdbID: "tt0303151",
            Type: "movie",
            Poster: <img src="https://m.media-amazon.com/images/M/MV5BNWVhOTY3ZWEtZDBlZC00ZGI4LWE5MjUtYWMzYzM5NzQ0YWJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"alt="" ></img>
        },
        {
            Title: "Kids Show",
            Year: "1990–1994",
            imdbID: "tt0198254",
            Type: "series",
            Poster: <img src="https://m.media-amazon.com/images/M/MV5BNDhkNDVmNzgtMWE1MC00ZDM5LWI3MGQtMTE2YTY3MzA4NDU0XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"alt="" ></img>
        },
        {
            Title: "Tales",
            Year: "2006–2008",
            imdbID: "tt0780438",
            Type: "series",
            Poster: <img src= "https://m.media-amazon.com/images/M/MV5BNGQ5YjJjOWYtNWVlZS00YWIwLTlkMWItY2I5MjY5MWQxY2FjXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg" alt="" ></img>
        },
        {
            Title: "Comedy Show",
            Year: "1980–1982",
            imdbID: "tt0282315",
            Type: "series",
            Poster: <img src="https://m.media-amazon.com/images/M/MV5BZTA3MmM1MzgtYTJlYS00NDI2LTkxMDQtZTZlYzJkNGZmMmM3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg" alt=""></img>
        },
        {
            Title: "Fast and the Furry",
            Year: "2005",
            imdbID: "tt0487176",
            Type: "movie",
            Poster: <img src= "https://m.media-amazon.com/images/M/MV5BMGU4YTZkODEtODIyNi00ZWJkLWE4M2MtMjQxMWNhYmNmYjU2XkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg" alt=""></img>
        },
         {
             Title: "Tom and Jerry",
            Year: "1940",
             imdbID: "tt12158994",
            Type: "series",
             Poster: <img src="https://m.media-amazon.com/images/M/MV5BZTBhZmVlZWItMWRmNS00ZGRkLWE0MTgtNmIzZDc2MjJmYjEzXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"alt=""></img>
         },
         {
          Title: "Tom and Jerry",
         Year: "1940",
          imdbID: "tt6422744",
         Type: "series",
          Poster: <img src="https://m.media-amazon.com/images/M/MV5BOWU1ZThkNWQtNmU0ZS00YzJkLWJkNzQtNzIyY2MzNWY3ZmM5XkEyXkFqcGdeQXVyNjY0NzU4Nzc@._V1_UY268_CR4,0,182,268_AL_.jpg"alt=""></img>
      },
      {
        Title: "Blast Off to Mars!",
       Year: "2005",
        imdbID: "tt0433696",
       Type: "series",
        Poster: <img src="https://m.media-amazon.com/images/M/MV5BODdjZGNhNzEtMGNhYi00NGE1LThlOTAtODQ2MDYyZmI0YjQ5XkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_UX182_CR0,0,182,268_AL_.jpg"alt=""></img>
    },
      ]
    const movieList = Movies.map((item, index) => {
        return <MoviesList key={index} Poster={item.Poster} Title={item.Title} Year={item.Year} imdbID={"imdb ID: "+item.imdbID} Type={item.Type} />
    })
    const movieRow = movieList.map((item) => {
        return <Col xs ="4">{item} </Col>
    })
    return (
        <div>

         {/* <center><img className="photo" src  = "https://www.hipi.info/wp-content/uploads/2015/07/tom-and-jerry-facebook-cover-01.jpg" alt= ""></img></center>  */}
              <center><div className = "test">
       <h1>Welcome to Tom and Jerry movies</h1> 
       <Clock />
      </div>
       <h1>            
--------------------------
--------------------------

       </h1>
</center>    
            <Container>
                <Col>
                    <Row>
                        {movieRow}
                    </Row>
                </Col>
            </Container>
        </div>
    )
}
export default App;
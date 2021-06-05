let MovieList = [];



export const MovieCard = ( {Movie}) => {
  const addToFav = Movie => {
    //console.log(Movie.Title);
    MovieList = [...MovieList,  Movie ];
    //setTodos(newTodos);
  };

  

    return (
      <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        <img className="card-img-top" src={Movie.Poster} alt="Movie image" style={{width: "200px", height: "300px"}}></img>
         </div>
        <div className="flip-card-back text-white bg-info mb-3">
          <div className="card-header bg-transparent border-success"><h5>{Movie.Title}</h5></div>
          <div className="card-body text-black">
            <h6 className="card-title">Year: {Movie.Year}</h6>
          </div>
          <div className="card-footer bg-transparent border-success">
          <button type="button" onClick={() => addToFav(Movie)} class="btn btn-dark bottom">Add to My List</button>
          <button type="button" onClick={() => MovieList.map(movie => {
      console.log(movie.Title);
    })} className="btn btn-dark bottom">show my fav</button>
          
          </div>
        </div>
      </div>
      </div>
    )
}

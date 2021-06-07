import {React,useState }from 'react';
import axios from 'axios';
const FoodList = () => {

    const [searchKey  , setSearchKey] = useState();
    const [ recipes, setRecipes] = useState ([]);
   // const [calories, setCalories] = useState(2000);
      const AppId = "425e5776";
      const AppKey = "";

    const handleSeach = (e) => {
        e.preventDefault();
        console.log("submit")
       axios.get(`https://api.edamam.com/search?q=${searchKey}&app_id=${AppId}&app_key=${AppKey}`).
       then( (res) => { 
           setRecipes(res.data.hits)
           console.log(res.data);}
           ).
       catch((err) => { console.log(err.data);})
    }

    return (
        <>




<div class="container">
  <div class="row align-items-start">
    {/* <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div> */}
  </div>
  <div class="row align-items-center">
    <div class="col">
    </div>
    <div class="col">
    <div class="input-group">
  
  <input type="text" class="form-control "  onChange = { (e) => setSearchKey(e.target.value) } />
  <div class="input-group-append">
    {/* <span class="input-group-text">Right addon</span> */}
    <button type="button" class="btn btn-outline-warning" onClick = {handleSeach}>Search</button>

  </div>
</div>    </div>
    <div class="col">
    </div>
  </div>
  </div>
 

  {/* <div class="row "> */}

  {recipes.map((m,i)=>{
  return(
<div class="card">
<div class="card-header">{m.recipe.label}</div>

 
  <img src= {m.recipe.image}  alt="" style={{width: "300px", height:"300px" }} /> 
 
  <div class="card-body">
    {/* <p style ={{    width: "258px" }}  className = "text-light" >{m.recipe.uri}</p> */}
    <a href={m.recipe.uri}>link text</a>

  </div>
  <button type="button" class="btn btn-primary" >Watch</button>

</div>  
 
  )
})
}

        </>
    );
};

export default FoodList;
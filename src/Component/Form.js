import React from 'react'

const Form = (props)=>{
    return(
        
        <form onSubmit ={props.getWither}>
           <div className="container text-center pt-3">
           <div class="input-group input-group-sm mb-3" >
        <h2> City   :  </h2>   <input type="text"  name = "city"  class="form-control" placeholder="City .... "></input>
            </div>
            <div class="input-group input-group-sm mb-3">
    <h2>Country   :</h2>    <input type="text" name="contry" class="form-control" placeholder="Country .... "></input>
            </div>
            <button class="btn btn-info">Show Wither </button>
            </div>
    </form>
    )
}
export default Form ;
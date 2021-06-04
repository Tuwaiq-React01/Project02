# CONTENT
This project is for education purpose. How to use React and apply a specific concepts .

## NASA EPIC API
In this project i will requesting data from NASA open source APIs using axios , it is free and public data that NASA has maintains .

## Concepts :
- State
- LifeCylce Functions
- Axios
 
## Project built using  :
- React
- bootstrap , css
- AJAX ( Axios )
- NASA EPIC API

## Components :
- Headre Component
- DateLC Component
  - contain two lifecycle functions :
     - 1- componentDidMount
     - 2- componentWillUnmount
- AboutApi Component
- Cards Component
   - componentDidMount
      - axios
  
## Dependencies :
  - Generate API Key, [here](https://api.nasa.gov/). 
    
      - 1- Get started
      - 2- fill up your info
      - 3- grap your Api key 
  
  - your fav text editor (= !
  -   change the API KEY here :
      ``` 
              axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=K6FLQtrQpXhz6wDRuCrVbtdmWl2hvnEz0aklQYZ3`)

      ```
       
      #### NOTE*   imges are updaeted daily , so we need to update the date into the link 
      ##### for example: today date is 2021-06-02 , change it to the current date (year , month , day) .
      
      ```
          <img src={`https://epic.gsfc.nasa.gov/archive/natural/2021/06/02/png/${epic.image}.png`} className="card-img-top" />
      ```  

## EPIC API Documentation Page
Read more about the api from NASA api documentation [here](https://epic.gsfc.nasa.gov/about/api). 



    

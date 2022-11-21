import axios from 'axios';
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_NAME = "COUNTRY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const FILTER_CONTINENT="FILTER_CONTINENT";
export const ORDER_COUNTRY= "ORDER_COUNTRY";
export const ORDER_POPULATION= "ORDER_POPULATION";
export const ALL_ACTIVITIES="ALL_ACTIVITIES";



export const getCountries = (payload) =>{

    return async (dispatch)=>{
      try{
    const getApy =(await axios(`http://localhost:3001/countries`)).data
    dispatch({type:GET_COUNTRIES, payload: getApy})
    }catch(error){
      console.log(error, 'catch getcountries')
    }
  }
    
};

export const getCountryName = (payload) =>{
    return async (dispatch)=>{
      try{
        const getName=( await axios(`http://localhost:3001/countries?name=${payload}`)).data
        dispatch({type:GET_COUNTRY_NAME, payload: getName})
      }catch(error){
        console.log(error, 'catch get name')
        alert('this country not exist')
      }
    }
};

export const getCountryId = (id)=>{
  return async (dispatch) =>{
  try{
    const getId = (await axios(`http://localhost:3001/countries/${id}`)).data
    dispatch({type: GET_COUNTRY_ID, payload: getId })
  }catch(error){
    console.log(error, 'error getid')
    } 
  }
};


export function postActivity(payload){
  return (dispatch) => {
    try{
      axios.post('http://localhost:3001/activities',{
      name: payload.name,
      duration: payload.duration,
      difficulty: payload.difficulty,
      season: payload.season,
      countriesAct: payload.countriesAct
      })
  }catch(error){
    alert('An error occurred, please try again')
    }
  }
}

export const filterByContinent= (payload)=> {
  return (dispatch)=>{
    dispatch({ type: FILTER_CONTINENT, payload: payload})
   } 
};
export const orderCountry = (payload)=>{
return (dispatch)=>{
  dispatch({ type: ORDER_COUNTRY, payload : payload})
 
  }
}

export const orderPopulation = (payload)=>{
  return (dispatch)=>{
    dispatch({ type: ORDER_POPULATION, payload : payload})
  }
}

export const allActivities = (payload)=>{
  return async (dispatch)=>{
    try{
    const getAtc = (await axios('http://localhost:3001/activities')).data

    dispatch({type: ALL_ACTIVITIES, payload:getAtc})
    }catch(error){
     console.log(error.message)
    } 
  }
}



export const clearDetail = ()=>{
  return { type: CLEAR_DETAIL , payload: []};
};
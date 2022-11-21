import {GET_COUNTRY_ID,GET_COUNTRIES,GET_COUNTRY_NAME,POST_ACTIVITY, CLEAN,FILTER_CONTINENT, ORDER_COUNTRY, ORDER_POPULATION, ALL_ACTIVITIES, CLEAR_DETAIL } from "./actions";




const initialState={
filterCountries:[],
countries:[],
activity:[],
countryId:{},

}

const rootReducer = (state = initialState , {type, payload})=>{
    switch(type){
        case GET_COUNTRIES:
                return {...state, countries: payload, filterCountries: payload};
        case GET_COUNTRY_NAME:
            return {...state, filterCountries: payload};
        case GET_COUNTRY_ID:
            return {...state, countryId : payload};
        case POST_ACTIVITY:
             return state;
        case CLEAR_DETAIL:
                return {...state, countryId:{}}
        case FILTER_CONTINENT:
                    const countries = state.countries
                    const filtered = payload === "All"? state.countries : countries.filter(e => e.continent === payload) 
            return  {
                ...state,
                filterCountries: filtered,
            }
        case ORDER_POPULATION:
           const countryPop = state.filterCountries
            const population= payload === "asc" ? countryPop.sort((a,b)=> (a.population > b.population ? 1 : -1)) : countryPop.sort((a,b)=> (a.population > b.population ? -1 : 1)) 
              
            return {
                ...state,
                filterCountries: population,
               
            }
        case ORDER_COUNTRY:
            const country = payload === "asc" ? state.filterCountries.sort((a, b)=>( a.name > b.name ? 1: -1)) :  state.filterCountries.sort((a, b)=>( a.name > b.name ? -1: 1))
               return {
                ...state,
                filterCountries: country,
               
               }
        case ALL_ACTIVITIES:
            let activ= payload.length ? payload : false 
            return {
                ...state,
                activity: activ
            }
        
         default: return {...state}
    
}}

export default rootReducer;
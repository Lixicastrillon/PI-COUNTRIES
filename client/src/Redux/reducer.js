const initialState = {
    countries: [],
    detail:{},
    listCountries:[]
    
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":

            return {
                ...state,//spread operator
                countries:action.payload
            }
        case"SEARCH_COUNTRY":
       
        return {
            ...state,
            countries:action.payload
        }

        case "GET_ID_COUNTRY":

        return {
            ...state,
            detail:action.payload
        }

        case "GET_COUNTRIES_LIST":
            return{
                ...state,
                listCountries:action.payload
            }

        // case "FILTER_CARDS":
        //  const filterCard= ()=>{
        //     state.countries.filter(
        //         (arg)=> arg.Continente === action.payload       
        //     )
        //  }


        default:
        return { ...state };
        
    }}

export default reducer;
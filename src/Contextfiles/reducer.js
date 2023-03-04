function reducer(state, action) {
    switch (action.type) {
      case "SET_USER":
          return{
            ...state,
            user:action.user}


      case "SET_CATE":
          return {
              ...state,
                Category:action.Category
              }
      case "SET_DATE":
          return {
              ...state,
                date:action.date
              }
      case "SET_FILLTER":
          return {
              ...state,
              fillter:action.fillter
              }
      case "SET_GUEST":
          return {
              ...state,
              guestdetails:action.guest
              }
      case "SET_GUESTTWO":
          return {
              ...state,
              guest:action.guest
              }

      default:
        return state;
    }
  }
  
  export default reducer;
  
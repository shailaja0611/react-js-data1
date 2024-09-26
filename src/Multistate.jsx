

// const  Multistate= {
//   users: [Never],
//   isLoading: false,
//   error: null,
// };

// const Multistate = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_USERS_REQUEST':
//       return { ...state, isLoading: true };
//     case 'FETCH_USERS_SUCCESS':
//       return { ...state, isLoading: false, users: action.payload };
//     case 'FETCH_USERS_FAILURE':
//       return { ...state, isLoading: false, error: action.payload };
//     case 'ADD_USER':
//       return { ...state, users: [...state.users, action.payload] };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter((user) => (`link unavailable`) !== action.payload)
//       };
//     default:
//       return state;
//   }
// };

// export default Multistate;

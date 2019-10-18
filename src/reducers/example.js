const initialState = {
    teams: []
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_TEAM_LIST':
            return { ...state, teams: action.payload }
        // case 'SET_BREED_DETAILS':
        //     return { ...state, breedImages: action.payload }
        // case 'SET_RANDOM_DOG_IMG':
        //     return { ...state, randomDogImage: action.payload } // 1 random dog breed image
        default:
            return state
    }
}

export default reducer
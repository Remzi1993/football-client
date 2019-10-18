export const setRandomDogImage = (payload) => {
    return {
        type: 'SET_RANDOM_DOG_IMG',
        payload
    }
}

export const fetchRandomDogImage = () => {
    return function (dispatch, getState) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dispatch(setRandomDogImage(data.message))
            }).catch(
                error => console.log(error)
            )
    }
}
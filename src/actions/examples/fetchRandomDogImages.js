export const setRandomDogImages = (randomDogImages) => {
    return {
        type: 'SET_RANDOM_DOG_IMAGES',
        payload: randomDogImages
    }
}

export const fetchRandomDogImages = () => {
    return function (dispatch, getState) {
        fetch('https://dog.ceo/api/breeds/image/random/2')
            .then(response => response.json())
            .then(data => {
                dispatch(setRandomDogImages(data.message))
            }).catch(
                error => console.log(error)
            )
    }
}
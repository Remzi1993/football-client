export const setBreedDetails = (breedImages) => {
    return {
        type: 'SET_BREED_DETAILS',
        payload: breedImages
    }
}

export const fetchBreedDetails = (breed) => {
    return function (dispatch, getState) {
        fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
            .then(response => response.json())
            .then(data => {
                dispatch(setBreedDetails(data.message.slice(0, 10)))
            }).catch(
                error => console.log(error)
            )
    }
}
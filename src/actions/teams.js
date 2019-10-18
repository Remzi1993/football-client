const baseUrl = 'http://localhost:4000'

export const fetchTeams = () => {
    return function (dispatch, getState) {
        // When the state contains teams, don't fetch again.
        if (getState().teams.length !== 0) return

        fetch(`${baseUrl}/teams`)
            .then(response => response.json())
            .then(response => {
                // console.log('What is data > ', response);
                dispatch(teamsFetched(response))
            })
            .catch(
                error => console.log(error)
            )
    }
}

export const teamsFetched = (teams) => {
    return {
        type: 'TEAMS_FETCHED',
        payload: teams
    }
}

export const createTeam = (data) => dispatch => {
    console.log('createTeam data > ', data);
    
    fetch(`${baseUrl}/teams`, {
            method: 'POST',
            body: data
        })
        .then(data => {
            console.log('Request success: ', data);
        })
        .then(response => {
            dispatch(teamCreateSuccess(response.body))
        })
        .catch(error => {
            console.log('Request failure: ', error);
        })
}

export const teamCreateSuccess = (team) => {
    return {
        type: 'TEAM_CREATE_SUCCESS',
        payload: team
    }
}
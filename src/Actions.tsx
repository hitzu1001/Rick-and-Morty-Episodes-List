import { IEpisode, IAction, IState, Dispatch } from './interfaces'

export const fetchDataAction = (dispatch: Dispatch) => {
    const URL =
        'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'

    fetch(URL)
        .then((data) => data.json())
        .then((dataJSON) => {
            return dispatch({
                type: 'FETCH_DATA',
                payload: dataJSON._embedded.episodes,
            })
        })

    // const data = await fetch(URL)
    // const dataJSON = await data.json()
    // return dispatch({
    //     type: 'FETCH_DATA',
    //     payload,
    // })
}

export const toggleFavAction = (
    state: IState,
    dispatch: any,
    episode: IEpisode | any
): IAction => {
    const episodeInFav = state.favorites.includes(episode)
    let dispatchObj = {
        type: 'ADD_FAV',
        payload: episode,
    }
    if (episodeInFav) {
        const favWithoutEpisode = state.favorites.filter(
            (fav: IEpisode) => fav.id !== episode.id
        )
        dispatchObj = {
            type: 'REMOVE_FAV',
            payload: favWithoutEpisode,
        }
    }
    return dispatch(dispatchObj)
}
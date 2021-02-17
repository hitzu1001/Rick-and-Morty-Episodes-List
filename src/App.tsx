import React, { Fragment, useContext, useEffect } from 'react'
import { Store } from './Store'
import { IEpisode, IAction } from './interfaces'

const EposodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function App(): JSX.Element {
    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        state.episodes.length === 0 && fetchDataAction()
    })

    const fetchDataAction = () => {
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

    const toggleFavAction = (episode: IEpisode): IAction => {
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

    const props = {
        episodes: state.episodes,
        toggleFavAction,
        favorites: state.favorites,
    }

    console.log(state.favorites.length)

    return (
        <Fragment>
            <header className="header">
                <div>
                    <h1>Rick and Morty</h1>
                </div>
                <div>
                    <h3>Pick your favorite episode!!! </h3>
                    <h3>Favorite(s): {state.favorites.length}</h3>
                </div>
            </header>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EposodesList {...props} />
                </section>
            </React.Suspense>
        </Fragment>
    )
}

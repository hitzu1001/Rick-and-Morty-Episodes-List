import React, { Fragment, useContext, useEffect } from 'react'
import { Store } from './Store'
import { IEpisodeProps } from './interfaces'
import {fetchDataAction, toggleFavAction} from './Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function HomePage() {
    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    })
    

    const props: IEpisodeProps = {
        episodes: state.episodes,
        toggleFavAction,
        favorites: state.favorites,
    }

    return (
        <Fragment>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EpisodesList {...props} />
                </section>
            </React.Suspense>
        </Fragment>
    )
}

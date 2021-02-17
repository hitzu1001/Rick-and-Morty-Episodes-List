import React, { useContext } from 'react'
import { Store } from './Store'
import { IEpisodeProps } from './interfaces'
import { toggleFavAction } from './Actions'

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function FavPage(): JSX.Element {
    const { state } = useContext(Store)

    const props: IEpisodeProps = {
        episodes: state.favorites,
        toggleFavAction,
        favorites: state.favorites,
    }

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <section className="episode-layout">
                <EpisodesList {...props} />
            </section>
        </React.Suspense>
    )
}

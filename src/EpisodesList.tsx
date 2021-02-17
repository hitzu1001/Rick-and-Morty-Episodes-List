import React, { useContext } from 'react'
import { Store } from './Store'
import { IEpisode, IEpisodeProps } from './interfaces'

export default function EpisodesList(props: IEpisodeProps): JSX.Element[] {
    const { state, dispatch } = useContext(Store)
    const { episodes, toggleFavAction, favorites } = props

    return episodes.map((episode: IEpisode) => {
        // const fav = favorites.find((fav:IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'
        const fav = favorites.includes(episode) ? (
            <p className="fav-symbol">❤️</p>
        ) : (
            <p className="fav-symbol">🖤</p>
        )
        return (
            <section className="episode-box" key={episode.id}>
                <img
                    src={episode.image.medium}
                    alt={`Rick and Mort ${episode.name}`}
                />
                <section className='episode-content'>
                    <div>
                        <div>{episode.name}</div>
                        <div>Season: {episode.season}</div>
                        <div>Number: {episode.number}</div>
                    </div>
                    <button
                        type="button"
                        onClick={() =>
                            toggleFavAction(state, dispatch, episode)
                        }
                    >
                        {fav}
                    </button>
                </section>
            </section>
        )
    })
}

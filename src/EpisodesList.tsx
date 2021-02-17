import React from 'react'
import { IEpisode } from './interfaces'

export default function EpisodesList(props: any): JSX.Element[] {
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
                <div>{episode.name}</div>
                <section>
                    <div>Season: {episode.season}</div>
                    <div>Number: {episode.number}</div>
                    <button
                        type="button"
                        onClick={() => toggleFavAction(episode)}
                    >
                        {fav}
                    </button>
                </section>
            </section>
        )
    })
}

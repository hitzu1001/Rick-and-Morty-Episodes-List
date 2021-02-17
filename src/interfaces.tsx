/**
|--------------------------------------------------
| All the interfaces!!
|--------------------------------------------------
*/
export type Dispatch = React.Dispatch<IAction>
export interface IEpisode {
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: { medium: string; original: string }
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    type: string
    url: string
}

export interface IState {
    episodes: IEpisode[]
    favorites: IEpisode[]
}

export interface IAction {
    type: string
    payload: IEpisode[] | any
}

export interface IEpisodeProps {
    episodes: IEpisode[]
    toggleFavAction: (
        state: IState,
        dispatch: Dispatch,
        episode: IEpisode
    ) => IAction
    favorites: IEpisode[]
}

import React, { Fragment, useContext } from 'react'
import { Link } from '@reach/router'
import { Store } from './Store'

export default function App(props: any): JSX.Element {
    const { state } = useContext(Store)
    // console.log(props.children.props.children[1].props.path)
    return (
        <Fragment>
            <header className="header">
                <div>
                    <h1>Rick and Morty</h1>
                    <h3>Pick your favorite episode!!! </h3>
                </div>
                <div className="header-pages">
                    <Link to="/">Home</Link>
                    <Link to="/faves">
                        Favorite(s): {state.favorites.length}
                    </Link>
                </div>
            </header>
            {props.children}
        </Fragment>
    )
}

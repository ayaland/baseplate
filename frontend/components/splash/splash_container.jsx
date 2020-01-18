import React from 'react';
import { Link } from 'react-router-dom';

class SplashContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <main>
                <header>
                    <div className="banner centered">
                        <p className="banner">Put it all together for {this.state.date.getFullYear()}.
                            <Link to="/before-and-after">Switch to Baseplates.</Link>
                        </p>
                    </div>
                    <nav></nav>
                </header>
                <div className="grid grid--centered">

                    <h1 className="heading x-large flush--top grid__item--large">
                        Put it all together and manage projects the right way.
                    </h1>
                    <p className="push_half--bottom">
                        <strong>Before Baseplates:</strong> 
                        Projects feel scattered, buildings shift, it’s tough to see where things fit together, and people fall down. 
                        <strong>After Basecamp:</strong>
                        Everything’s organized in one place, people are standing on top of studs, buildings are at right angles, and a sense of calm sets in.</p>
                    <div className="grid__item--medium push_double--bottom">
                        <div className="cta push--top">
                            <Link className="button button--primary" to="/signup">Give Baseplates a Try</Link>
                            <p className="x-small"><span data-signups="">12,522</span> companies signed up in the last week alone!</p>
                        </div>

                    </div>

                </div>
            </main>
        )
    }
}

export default SplashContainer;
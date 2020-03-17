import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <main id="splash">
                {/* <header>
                    <div className="banner centered">
                        <p className="banner">Put it all together for {this.state.date.getFullYear()}.
                            <Link to="/before-and-after">Switch to Baseplates.</Link>
                        </p>
                    </div>
                    <nav></nav>
                </header> */}
                <section className="wrapper wrapper--intro">
                    <div className="grid grid--centered centered-medium">
                        <div className="star-banner grid_item grid_item--medium centered">
                            <div className="star-banner_item"><img alt="5 stars" src={window.stars} />"exactly what we need</div>
                            <div className="star-banner_item"><img alt="5 stars" src={window.stars} />"wonderful</div>
                            <div className="star-banner_item"><img alt="5 stars" src={window.stars} />"extremely user friendly"</div>
                            <div className="star-banner_item"><img alt="5 stars" src={window.stars} />"truly amazing"</div>
                        </div>

                        <h1 className="heading heading--x-large flush--top grid_item grid_item--large">
                            Put it all together and manage projects the right way.
                        </h1>

                        <p className="push_half--bottom">
                            <strong>Before Baseplates: </strong> 
                            Projects feel scattered, buildings shift, it’s tough to see where things fit together, and people keep falling over. 
                            <strong> After Baseplates: </strong>
                            Everything’s organized on one plane, minifigures are standing on top of studs, buildings are at right angles, and a sense of calm sets in.
                        </p>

                        <div className="grid_item grid_item--medium push_double--bottom">
                            <div className="cta push--top">
                                <Link className="button button--primary" to="/login">Give Baseplates a Try</Link>
                                <p className="x-small"><span data-signups="">{Math.round(Math.random() * 10000)}</span> builders signed up in the last week alone!</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}

export default Splash;
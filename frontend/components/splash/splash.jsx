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
                            <div className="star-banner_item"><img alt="5 stars" src={window.stars} />"exactly what we need"</div>
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
                            <br />
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

                <section className="wrapper bg-butcher-paper">
                    <div className="grid grid--centered grid--formatted centered">
                        <h3 className="heading push--top">Do you play with LEGO?</h3>
                        <p>
                            <strong>
                                <a href="https://www.goodreads.com/book/show/30032600-build-it-volume-1" class="splash-link">
                                    Read "Build It!", a book on how to make a LEGO city the Baseplate way
                                </a>
                            </strong>
                            {'.'}
                        </p>

                        <h3 className="heading push--top">Want to get better at Baseplate?</h3>
                        <p>
                            <strong>
                                <a href="https://www.barnesandnoble.com/w/the-lego-ideas-book-daniel-lipkowitz/1105678814" class="splash-link">
                                    One of our favorite books in our library
                                </a>
                            </strong>
                            {' or '}
                            <strong>
                                <a href="https://www.activityhero.com/activities/lego-camps-classes" class="splash-link">
                                    sign up for a class
                                </a>
                            </strong>
                            {'.'}
                        </p>

                        <h3 className="heading push--top">Need some help?</h3>
                        <p className="push_double--bottom">
                            <strong>
                                <a href="https://github.com/ayaland/baseplate/wiki" class="splash-link">
                                    Read Baseplate docs
                                </a>
                            </strong>
                            {' or '}
                            <strong>
                                <a href="https://www.linkedin.com/in/aya-shirai/" class="splash-link">
                                    send us a message for detailed help
                                </a>
                            </strong>
                            {'.'}
                        </p>
                    </div>
                </section>

                <footer className="footer app-android_hide">
                    <div className="grid">
                        <p className="x-small grid_item grid_item--medium">
                            <strong>Baseplate apps: </strong>
                            <br></br>
                            <strong>Projects</strong>
                            <br></br>
                            <strong>Messageboards</strong>
                            <br></br>
                            <strong>Todo Lists</strong>
                            <br></br>
                            <strong>Also visit: </strong><Link to="https://store.bricklink.com/moreshelfspace&utm_content=globalnav#/shop">our used LEGO shop</Link>
                        </p>

                    </div>

                </footer>
            </main>
        )
    }
}

export default Splash;
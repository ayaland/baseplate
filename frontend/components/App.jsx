import React from 'react';
import SignupContainer from './session/signup_container'

const App = () => (
    <div>
        <h1>App!</h1>
        <Route path="/signup" component={SignupContainer} />
    </div>
)

export default App;
import React from 'react';

import HomeNavBar from '../../navbar/home_navbar';

const AppContainer = (props) => {
    console.log(props);

    switch (props.match.path) {
        case (""):
            return (
                <>
                    <div className="panel panel--perma push_double--bottom centered">
                        <NewProjectForm />
                    </div>
                </>
            );
        case (""):
            return (
                <>
                    <div className="panel panel--perma push_double--bottom centered">
                        <ProjectHome projectId={props.match.params.projectId} />
                    </div>
                </>
            )
    }
}

export default AppContainer;
import React from 'react';

import HomeNavBar from '../../navbar/home_navbar';
import NewProjectForm from './new_project_form';
import ProjectHome from './project_home';

const ProjectContainer = (props) => {

    switch (props.match.path) {
        case ("/:userId/projects/new"):
            return (
                <>
                    {/* <HomeNavBar /> */}
                    <div className="panel panel--perma push_double--bottom centered">
                        <NewProjectForm />
                    </div>
                </>
            );
        case ("/:userId/projects/:projectId"):
            return (
                <>
                    {/* <HomeNavBar /> */}
                    <div className="panel panel--perma push_double--bottom centered">
                        <ProjectHome projectId={props.match.params.projectId}/>
                    </div>
                </>
            )
    }
}

export default ProjectContainer;
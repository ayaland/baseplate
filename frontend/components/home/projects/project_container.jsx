import React from 'react';

import HomeNavBar from '../../navbar/home_navbar';
import NewProjectForm from './new_project_form';
import ProjectHome from './homepage_project';

const ProjectContainer = (props) => {
    console.log(window.location);
    console.log('Project Container!')
    console.log(props.match.path);

    switch (window.location) {
        case (props.match.path):
            return (
                <>
                    <HomeNavBar />
                    <div className="panel panel--perma push_double--bottom centered">
                        <NewProjectForm />
                    </div>
                </>
            );
        default:
            return (
                <>
                    <HomeNavBar />
                    <div className="panel panel--perma push_double--bottom centered">
                        <ProjectHome />
                    </div>
                </>
            )
    }
    // return (
    //     <>
    //         <HomeNavBar />
    //             <h3></h3>
    //         <div className="panel panel--perma push_double--bottom centered">
    //             {/* render ProjectHome or NewProjectForm component here */}
    //             <NewProjectForm />
    //         </div>
    //     </>
    // );
}

export default ProjectContainer;
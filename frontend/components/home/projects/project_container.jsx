import React from 'react';

import HomeNavBar from '../../navbar/home_navbar';
import NewProjectForm from './new_project_form';

const ProjectContainer = (props) => {
    return (
        <>
            <HomeNavBar />
            <div className="panel panel--perma push_double--bottom centered">
                {/* render ProjectHome or NewProjectForm component here */}
                <NewProjectForm />
            </div>
        </>
    );
}

export default ProjectContainer;
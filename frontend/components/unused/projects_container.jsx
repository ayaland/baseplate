import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createProject, fetchProjects } from '../../actions/project_actions'
import NewProjectForm from '../home/projects/new_project_form';
import ProjectHome from '../home/projects/project_home';

// ownProps will be able to match params to userId
const mapStateToProps = (state) => {
    return {
        projects: Object.values(state.entities.projects),
        sessionId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => ({
    createProject: () => dispatch(createProject(project)),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (id) => dispatch(fetchProject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);

// const ProjectsContainer = (props) => {
//     return (
//             <div className="panel panel--perma push_double--bottom centered"></div>
//     )
// }
// const ProjectContainer = (props) => {
//     switch (props.match.path) {
//         case ("/:userId/projects/new"):
//             return (
//                 <>
//                     <div className="panel panel--perma push_double--bottom centered">
//                         <NewProjectForm />
//                     </div>
//                 </>
//             );
//         case ("/:userId/projects/:projectId"):
//             return (
//                 <>
//                     <div className="panel panel--perma push_double--bottom centered">
//                         <ProjectHome projectId={props.match.params.projectId}/>
//                     </div>
//                 </>
//             );
//     }
// }
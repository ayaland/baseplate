import React from 'react';

class ProjectHome extends React.Component { 

    render() {
        return (
            <header className="project-header project-header--for-home centered">
                <h1 className="project-header_name--overview">Project Name</h1>
                <h4 className="project-header_description normal">Project description</h4>
            </header>

            <section className="project-dock centered">
                <div className="card-grid">
                    {/* this.props.apps.map((app) => (
                        <AppCard app={app} key=... />
                    )) */}

                </div>

            </section>
            
        );
    }
}

export default ProjectHome;
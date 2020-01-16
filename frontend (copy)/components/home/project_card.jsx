import React from 'react';
import { connect } from 'react-redux';


class ProjectCard extends React.Component {
    render() {
        return (
            <main>
                <article className="project-card">
                    <a href="/" className="card_link">
                        <div className="card_content">
                            <h2 className="card_title flush">{this.props.project.name}</h2>
                            <p className="card_description flush">{this.props.title}</p>
                            <img className="card_avatar" src={window.demo_avatar} />
                        </div>
                    </a>
                </article>
            </main>
        );
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
    // return {
    //     currentUser: users[session.id]
    // };
};

export default connect(mapStateToProps)(ProjectCard);

import React from 'react';
import { connect } from 'react-redux';


// class ProjectCard extends React.Component {
//     render() {
//         return (
//             <main>
//                 <article className="project-card">
//                     <a href="/" className="card_link">
//                         <div className="card_content">
//                             <h2 className="card_title flush">{this.props.project.name}</h2>
//                             <p className="card_description flush">{this.props.title}</p>
//                             <img className="card_avatar" src={window.demo_avatar} />
//                         </div>
//                     </a>
//                 </article>
//             </main>
//         );
//     }

// }

// const mapStateToProps = (state) => {
//     console.log(state);
//     return state;
//     // return {
//     //     currentUser: users[session.id]
//     // };
// };

// export default connect(mapStateToProps)(ProjectCard);
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function CommentCard(props) {
    let comment = props.comment
    let name = props.comment.author_name
    let d = new Date(props.comment.created_at).toString()
    let date = d.split(' ')
    return (
        <article className="comment-card">
            <header>
                {
                    name === "Forestman2" &&
                    <img className="comment_avatar" src={window.forestman_avatar} />
                }
                {
                    name === "Blacktron" &&
                    <img className="comment_avatar" src={window.blacktron_avatar} />
                }
                {
                    name === "Minifig" &&
                    <img className="comment_avatar" src={window.demo_avatar} />
                }
                <span className="comment_author txt-bold">{name}</span>
                <span className="comment_corner">
                    <span className="comment_date">
                        {date[1]} {date[2]}
                    </span>
                </span>
            </header>

            <div className="comment_content">{ReactHtmlParser(comment.body)}</div>

        </article>
    )
}

export default CommentCard;
import React from 'react';

function AboutPageList(props) {
    return (
        <div>
            <h1>{props.name.title}</h1>
            <p>{props.name.body}</p>
        </div>
    );
}

export default AboutPageList;
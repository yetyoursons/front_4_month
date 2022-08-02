import React from 'react';
import AboutPageList from '../../components/aboutPageList/AboutPageList';

function AboutPage(props) {
    const info = {
        title: "I am a title",
        body: "I am a body"
    }
    return (
        <div>
            <AboutPageList name = {info}/>
        </div>
    );
}

export default AboutPage;
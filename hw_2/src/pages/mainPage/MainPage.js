// нажми rsf , rsc для стрелочной, rs
import React from 'react';
import Footer from '../../components/footer/Footer';
import { Header } from '../../components/header/header';

function MainPage(props) {
    return (
        <div>
            <Header/>
            <h1>Main page</h1>
            <Footer/>
        </div>
    );
}



export default MainPage;

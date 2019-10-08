import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>
                        <strong>Engineer</strong><br/>
                        <br />
                        <br />
                       <strong onClick="" >Artist</strong> <br />
                       <br />
                       <br />
                        <strong>Casual Chess Player</strong>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

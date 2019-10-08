import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
// import thumb04 from '../assets/images/thumbs/04.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import { url } from 'inspector'
// import full04 from '../assets/images/fulls/04.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { 
        id: '1',
        source: full01, 
        thumbnail: thumb01, 
        caption: 'Tower of Hanoi', 
        description: 'A centuries old game remade here using JavaScript, HTML and CSS.', 
        
        link: 'https://yousefmahmad.github.io/towerofhanoi/' 
    },
    {   
        id: '2', 
        source: full02, 
        thumbnail: thumb02, 
        caption: 'Crypto', 
        description: 'An API built from scratch to give the user all the different cryptocurrencies and related information. Built using MongoDB, Express.js, Node.js, Heroku, Mongo Atlas', 
        link: 'https://breek-crypto.herokuapp.com/'},
    { 
        id: '3', 
        source: full03, 
        thumbnail: thumb03, 
        caption: 'Fiji Front End Design', 
        description: 'A beautiful front end design, collabratively developed using CSS, HTML and JavaScript.', 
        link: 'https://breek-crypto.herokuapp.com/api/coins'},
    // { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hi, I'm Yousef. Nice to meet you.</h2>
                        </header>
                        <p> I'm a software engineer with experience in Petroleum Engineering and management. I have a passion for modern design, mathematical puzzles and an attention to detail, which allows me to build contemporary, clean and unique products. </p>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, link }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            link
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="mailto: ymabreek@gmail.com">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Washington DC<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        602-748-0479
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto: ymabreek@gmail.com">ymabreek@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://medium.com/@yousefahmad495" className="icon fa-medium"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/yousefmahmad/" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="www.linkedin.com/in/yousef-m-ahmad" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:ymabreek@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

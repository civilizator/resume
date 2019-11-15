import React from "react"
import classes from "./Contact.module.scss"
import myPhoto from "./../../../assets/images/argaatas.png"
import { logoFacebook, logoLinkedin, logoTwitter } from "../../../assets/ionicons"
import paper from "../../../assets/ionicons/md-paper.svg"

const Contact = (props) => {
    return (
        <div className={ classes.content }>
            <div className={ classes.header }>
                <p className={ classes.image }>
                    <img alt="Contact" src={ paper }/>
                </p>
            </div>
            <div className={ classes.left }>
                <h2>HELLO</h2>
                <p>My name is Stan</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ut?full name Stanislav Kovrigin</p>
                <p>I'm live in Siberia </p>
                <h4>LOCATION</h4>
                <p>Russian Federation</p>
            </div>
            <div className={ classes.right }>
                <div className={ classes.infoImage }>
                    <img alt="" src={ myPhoto }/>
                </div>
                <div className={ classes.infoContacts }>
                    <h2>CONTACTS</h2>
                    <div className={ classes.personContact }>
                        <div className={ classes.mailPhone }>
                            <p>
                                <a className={classes.phone}
                                   href="tel:7-908-653-5896"
                                   title="7-908-653-5896">
                                    +7-908-653-58-96
                                </a>
                            </p>
                            <p>
                                <a className={classes.mail} target="_blank" rel="noopener noreferrer"
                                   href="mailto:stan@argaatas.com"
                                   title="stan@argaatas.com">
                                    stan@argaatas.com
                                </a>
                            </p>
                        </div>

                        <p className={ classes.socials }>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://linkedin.com/in/argaatas" title="LinkedIn">
                                <img alt="LinkedIn" src={ logoLinkedin }/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://twitter.com/Stan_Kovrigin" title="Twitter">
                                <img alt="Twitter" src={ logoTwitter }/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.facebook.com/people/Stanislav-Kovrigin/100001788268020"
                               title="Facebook">
                                <img className={classes.facebook} alt="Facebook" src={ logoFacebook }/>
                            </a>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact
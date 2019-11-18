import React from "react"
import classes from "./Contact.module.scss"
import myPhoto from "./../../../assets/images/argaatas.png"
import { logoFacebook, logoLinkedin, logoTwitter } from "../../../assets/ionicons"
import paper from "../../../assets/ionicons/md-paper.svg"

const Contact = (props) => {
    return (
        <div className={ classes.contentContact }>
            <div className={ classes.header }>
                <p className={ classes.image }>
                    <img alt="Contact" src={ paper }/>
                </p>
            </div>
            <div className={ classes.left }>
                <div className={classes.hello}>
                    <h2>HELLO</h2>
                    <p>My name is Stan</p>
                    <p>I am looking for a remote job Manual Tester</p>
                </div>

                <div>
                    <p>I live</p>
                    <p>
                        Irkutsk region, city <a className={classes.city}
                        target="_blank" rel="noopener noreferrer"
                           href="https://www.google.com/maps/place/%D0%A1%D0%B0%D1%8F%D0%BD%D1%81%D0%BA,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@53.7972809,101.3200731,6z/data=!4m5!3m4!1s0x5d03b23f21fa9807:0x2ce8ea0fe797718d!8m2!3d54.1065069!4d102.1888502"
                           title="Open in google maps">
                            Sayansk
                        </a>
                    </p>
                </div>
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
                                   href="tel://+79086535896"
                                   title="Open in your app for call">
                                    +7-908-653-58-96
                                </a>
                            </p>
                            <p>
                                <a className={classes.mail} target="_blank" rel="noopener noreferrer"
                                   href="mailto:stan@argaatas.com"
                                   title="Create message to Stan">
                                    stan@argaatas.com
                                </a>
                            </p>
                            <p>
                                <a className={classes.skype}
                                   href="skype:argaatas"
                                   title="Open in skype">
                                    argaatas
                                </a>
                            </p>
                        </div>

                        <div className={ classes.socials }>
                            <p>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://linkedin.com/in/argaatas"
                                   title="Go to linkedIn">
                                    <img alt="LinkedIn" src={ logoLinkedin }/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://twitter.com/Stan_Kovrigin"
                                   title="Go to twitter">
                                    <img alt="Twitter" src={ logoTwitter }/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.facebook.com/people/Stanislav-Kovrigin/100001788268020"
                                   title="Go to facebook">
                                    <img className={classes.facebook} alt="Facebook" src={ logoFacebook }/>
                                </a>
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact
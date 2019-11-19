import React from "react"
import classes from "./Contact.module.scss"
import logoLinkedin from "../../../assets/ionicons/logo-linkedin.svg"
import logoTwitter from "../../../assets/ionicons/logo-twitter.svg"
import logoFacebook from "../../../assets/ionicons/logo-facebook.svg"

const ContactRight = (props) => {
    const {
        myPhoto, title, phoneLink, titlePhoneLink, numberPhone,
        mailLink, titleMailLink, emailAddress,
        skypeLink, titleSkypeLink, skypeName,
        linkedInLink, titleLinkedInLink, linkedInImgAlt,
        twitterLink, titleTwitterLink, twitterImgAlt,
        facebookLink, titleFacebookLink, facebookImgAlt
    } = props.sectionRight

    return (
        <div className={ classes.right }>
            <div className={ classes.infoImage }>
                <img alt="" src={ myPhoto }/>
            </div>
            <div className={ classes.infoContacts }>
                <h2>{ title }</h2>
                <div className={ classes.personContact }>
                    <div className={ classes.mailPhone }>
                        <p>
                            <a className={ classes.phone }
                               href={ phoneLink }
                               title={ titlePhoneLink }>
                                { numberPhone }
                            </a>
                        </p>
                        <p>
                            <a className={ classes.mail } target="_blank" rel="noopener noreferrer"
                               href={ mailLink }
                               title={ titleMailLink }>
                                { emailAddress }
                            </a>
                        </p>
                        <p>
                            <a className={ classes.skype }
                               href={ skypeLink }
                               title={ titleSkypeLink }>
                                { skypeName }
                            </a>
                        </p>
                    </div>

                    <div className={ classes.socials }>
                        <p>
                            <a target="_blank" rel="noopener noreferrer"
                               href={ linkedInLink }
                               title={ titleLinkedInLink }>
                                <img alt={ linkedInImgAlt } src={ logoLinkedin }/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href={ twitterLink }
                               title={ titleTwitterLink }>
                                <img alt={ twitterImgAlt } src={ logoTwitter }/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href={ facebookLink }
                               title={ titleFacebookLink }>
                                <img alt={ facebookImgAlt } src={ logoFacebook }/>
                            </a>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ContactRight

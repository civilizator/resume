import myPhoto from "./../assets/images/argaatas.png"

const initialState = {

    contactInfo: {
        sectionLeft: {
            title: "HELLO",
            myName: "My name is Stan",
            lookingJob: "I am looking for a remote job Manual Tester",
            iLive: "I live",
            region: "Irkutsk region, city",
            googleMapsLink: "https://www.google.com/maps/place/%D0%A1%D0%B0%D1%8F%D0%BD%D1%81%D0%BA,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@53.7972809,101.3200731,6z/data=!4m5!3m4!1s0x5d03b23f21fa9807:0x2ce8ea0fe797718d!8m2!3d54.1065069!4d102.1888502",
            titleLink: "Open in google maps",
            city: "Sayansk"
        },

        sectionRight: {
            myPhoto,
            title: "CONTACTS",

            phoneLink: "tel://+79086535896",
            titlePhoneLink: "Open in your app for call",
            numberPhone: "+7-908-653-58-96",

            mailLink: "mailto:stan@argaatas.com",
            titleMailLink: "Create message to Stan",
            emailAddress: "stan@argaatas.com",

            skypeLink: "skype:argaatas",
            titleSkypeLink: "Open in skype",
            skypeName: "argaatas",

            linkedInLink: "https://linkedin.com/in/argaatas",
            titleLinkedInLink: "Go to linkedIn",
            linkedInImgAlt: "LinkedIn",

            twitterLink: "https://twitter.com/Stan_Kovrigin",
            titleTwitterLink: "Go to twitter",
            twitterImgAlt: "Twitter",

            facebookLink: "https://www.facebook.com/people/Stanislav-Kovrigin/100001788268020",
            titleFacebookLink: "Go to facebook",
            facebookImgAlt: "Facebook",
        }
    }
}

const contactReducer = (state = initialState, action) => {
    return state
}

export default contactReducer

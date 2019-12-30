import myPhoto from "./../assets/images/argaatas.png"

const TOGGLE_LANGUAGE_CONTACT = "TOGGLE-LANGUAGE-CONTACT"

export const dataContact = {

    contactEnglish: {
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
            titleSkypeLink: "Open in Skype",
            skypeName: "argaatas",

            linkedInLink: "https://linkedin.com/in/argaatas",
            titleLinkedInLink: "Go to LinkedIn",
            linkedInImgAlt: "LinkedIn",

            twitterLink: "https://twitter.com/Stan_Kovrigin",
            titleTwitterLink: "Go to Twitter",
            twitterImgAlt: "Twitter",

            facebookLink: "https://www.facebook.com/people/Stanislav-Kovrigin/100001788268020",
            titleFacebookLink: "Go to facebook",
            facebookImgAlt: "Facebook",
        }
    },

    contactRussian: {
        sectionLeft: {
            title: "ПРИВЕТ",
            myName: "Меня зовут Стэн",
            lookingJob: "Ищу удаленную работу Ручным Тестировщиком",
            iLive: "Я живу",
            region: "Иркутская область, город",
            googleMapsLink: "https://www.google.com/maps/place/%D0%A1%D0%B0%D1%8F%D0%BD%D1%81%D0%BA,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@53.7972809,101.3200731,6z/data=!4m5!3m4!1s0x5d03b23f21fa9807:0x2ce8ea0fe797718d!8m2!3d54.1065069!4d102.1888502",
            titleLink: "Открыть в Гугл Карте",
            city: "Саянск"
        },

        sectionRight: {
            myPhoto,
            title: "КОНТАКТЫ",

            phoneLink: "tel://+79086535896",
            titlePhoneLink: "Открыть в Вашем приложении для звонка",
            numberPhone: "+7-908-653-58-96",

            mailLink: "mailto:stan@argaatas.com",
            titleMailLink: "Создайте и отправьтк сообщение Стэну",
            emailAddress: "stan@argaatas.com",

            skypeLink: "skype:argaatas",
            titleSkypeLink: "Открыть в Скайпе",
            skypeName: "argaatas",

            linkedInLink: "https://linkedin.com/in/argaatas",
            titleLinkedInLink: "Перейти в Линкедин",
            linkedInImgAlt: "Линкедин",

            twitterLink: "https://twitter.com/Stan_Kovrigin",
            titleTwitterLink: "Перейти в Твиттер",
            twitterImgAlt: "Твиттер",

            facebookLink: "https://www.facebook.com/people/Stanislav-Kovrigin/100001788268020",
            titleFacebookLink: "Перейти в Фэйсбук",
            facebookImgAlt: "Фэйсбук",
        }
    }
}

const initialState = dataContact.contactEnglish


const contactReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_LANGUAGE_CONTACT: {
            return {
                ...state = action.languages
            }
        }
        default:
            return state
    }
}


export const contactLanguageCreator = (languages) => {
    return { type: TOGGLE_LANGUAGE_CONTACT, languages }
}

export default contactReducer

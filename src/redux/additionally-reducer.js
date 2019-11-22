const TOGGLE_LANGUAGE_ADDITIONALLY = "TOGGLE-LANGUAGE-ADDITIONALLY"

export const dataAdditionally = {
    additionallyEnglish: {
        sectionLeft: {
            title: "ADDITIONALLY SKILLS",
            skills: [
                "Automation ( JS + WebDriver )", "JavaScript",
                "Node.js", "ReactJS", "Redux", "KoaJS",
                "ExpressJS", "Axios", "Gulp", "AJAX",
                "JSON API", "MongoDB", "MySQL", "HTML",
                "SASS", "CSS"
            ]
        },
        sectionRight: {
            titleOther: "OTHER",
            timezoneText: "Timezone:",
            timezoneLink: "https://greenwichmeantime.com/time-zone/gmt-plus-8/",
            timezoneTitleLink: "Open to compare time",
            timezone: "GMT+8",
            citizenship: "Citizenship: Russia",

            titleLanguages: "LANGUAGES",
            languages: [
                "Russian: Native",
                "English: Written and reading only"
            ]
        }
    },

    additionallyRussian: {
        sectionLeft: {
            title: "ЕЩЕ НАВЫКИ",
            skills: [
                "Automation ( JS + WebDriver )", "JavaScript",
                "Node.js", "ReactJS", "Redux", "KoaJS",
                "ExpressJS", "Axios", "Gulp", "AJAX",
                "JSON API", "MongoDB", "MySQL", "HTML",
                "SASS", "CSS"
            ]
        },
        sectionRight: {
            titleOther: "РАЗНОЕ",
            timezoneText: "Часовой пояс:",
            timezoneLink: "https://greenwichmeantime.com/time-zone/gmt-plus-8/",
            timezoneTitleLink: "Открыть для сравнения",
            timezone: "GMT+8",
            citizenship: "Гражданство: Россия",

            titleLanguages: "ЯЗЫКИ",
            languages: [
                "Русский: Родной",
                "Английский: Только письмо и чтение"
            ]
        }
    }
}

const initialState = dataAdditionally.additionallyEnglish

const additionallyReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_LANGUAGE_ADDITIONALLY: {
            return {
                ...state = action.languages
            }
        }
        default: return state
    }
}

export const additionallyLanguageCreator = (languages) => {
    return { type: TOGGLE_LANGUAGE_ADDITIONALLY, languages}
}

export default additionallyReducer

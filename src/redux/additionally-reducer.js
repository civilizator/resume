
const initialState = {
    additionallyInfo: {
        sectionLeft: {
            title: "ADDITIONALLY SKILLS",
            skills: [
                "Automation ( JS + WebDriver )",
                "JavaScript",
                "Node.js",
                "ReactJS",
                "Redux",
                "KoaJS",
                "ExpressJS",
                "Axios",
                "Gulp",
                "AJAX",
                "JSON API",
                "MongoDB",
                "MySQL",
                "HTML",
                "SASS",
                "CSS",
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
                "English: Written only"
            ]
        }
    }
}

const additionallyReducer = (state = initialState, action) => {
    return state
}

export default additionallyReducer

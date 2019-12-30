const TOGGLE_LANGUAGE_EXPERIENCE = "TOGGLE-LANGUAGE-EXPERIENCE"

export const dataExperience = {

    experienceEnglish: {

        sectionLeft: {
            title: "SKILLS",

            skills: [
                "Functional testing",
                "Regression testing",
                "Exploratory testing",
                "Usability testing",
                "User interface testing",
                "Performance Testing",
                "Test Case Writing",
                "Test Case Execution"
            ]
        },

        sectionRight: {
            title: "EXPERIENCE",

            termWork: "May 2014 - present",
            whereWorked: "uTest www.utest.com",

            titleProfession: "TESTER",
            whatDid: [
                "Manual testing web and mobile app",
                "Performing or writing test cases",
                "Create bug reports or reproduction of created reports"
            ]

        }

    },

    experienceRussian: {

        sectionLeft: {
            title: "НАВЫКИ И УМЕНИЯ",

            skills: [
                "Функциональное тестирование",
                "Регрессионное тестирование",
                "Исследовательское тестирование",
                "Тестирование удобства пользования",
                "Тестирование пользовательского интерфейса",
                "Тестирование производительности",
                "Написание тестового сценария",
                "Выполнение тестового сценария"
            ]
        },

        sectionRight: {
            title: "ОПЫТ",

            termWork: "Май 2014 - по настоящее время",
            whereWorked: "uTest www.utest.com",

            titleProfession: "ТЕСТЕР",
            whatDid: [
                "Ручное тестирование веб и мобильных приложений",
                "Выполнение или написание тестовых сценариев",
                "Создание отчетов об ошибках или воспроизведение созданных отчетов"
            ]

        }

    }
}

const initialState = dataExperience.experienceEnglish

const experienceReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_LANGUAGE_EXPERIENCE: {
            return {
                ...state = action.languages
            }
        }
        default:
            return state
    }
}

export const experienceLanguageCreator = (languages) => {
    return { type: TOGGLE_LANGUAGE_EXPERIENCE, languages }
}

export default experienceReducer

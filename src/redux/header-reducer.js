const TOGGLE_LANGUAGE_HEADER = "TOGGLE-LANGUAGE-HEADER"

export const dataHeader = {

    headerEnglish: {
        resume: "Resume",
        names: "STANISLAV KOVRIGIN",
        title: "Select russian language",
        language: "English language",
        checkLanguage: "ENGLISH"
    },

    headerRussian: {
        resume: "Резюме",
        names: "СТАНИСЛАВ КОВРИГИН",
        title: "Выберите английский язык",
        language: "Русский язык",
        checkLanguage: "RUSSIAN"
    }
}

const initialState = dataHeader.headerEnglish

const headerReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_LANGUAGE_HEADER: {
            return {
                ...state = action.languages
            }
        }
        default: return state
    }
}

export const headerLanguageCreator = (languages) => {
        return { type: TOGGLE_LANGUAGE_HEADER, languages }
    }

export default headerReducer

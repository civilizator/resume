const initialState = {

    experienceInfo: {
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

    }
}

const experienceReducer = (state = initialState, action) => {
    return state
}

export default experienceReducer

import { createMuiTheme, makeStyles } from "@material-ui/core/styles"

export const customTheme = createMuiTheme( {
    palette: {
        primary: {
            light: '#e6e6e6',
            main: '#e0e0e0',
            dark: '#9c9c9c',
            error: '#f44336',
            formError: '#ea4e1c',
            avatar: 'rgba(0,0,0,0.61)',
            text: 'rgba(0,0,0,0.87)',
            color: '#fff'
        },
        secondary: {
            light: '#e6f8fb',
            main: '#e0f7fa',
            dark: '#9cacaf',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
    }
} )

export const useStyles = makeStyles( theme => ( {
    paper: {
        marginTop: theme.spacing( 8 ),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing( 1 ),
        backgroundColor: theme.palette.primary.avatar,

    },
    avatarError: {
        margin: theme.spacing( 1 ),
        backgroundColor: theme.palette.primary.main,
    },


    form: {
        // '& .Mui-error': {
        //     color: "green",
        //     borderColor: "green",
        // },
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing( 1 ),
        '& fieldset': {
            borderLeftWidth: 6,
        },
        '& input + fieldset': {
            // borderColor: theme.palette.primary.main,
        },
        '& .MuiInputBase-root:hover fieldset': {
            borderColor: theme.palette.primary.dark,
        },


        '& .MuiFormLabel-root.Mui-error': {
            color: theme.palette.primary.formError,
        },

        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.formError,
        },

        '& .MuiFormControlLabel-root': {
            color: theme.palette.primary.avatar,
        },

        '& .MuiCheckbox-root': {
            color: theme.palette.primary.avatar,
        },

        '& .MuiCheckbox-colorSecondary.Mui-checked': {
            color: theme.palette.primary.dark,
        },


// '& input:valid + fieldset': {
        //     borderColor: 'green',
        // },
        // '& input:valid:focus + fieldset': {
        //     borderColor: 'blue',
        // },
        // '& input:invalid + fieldset': {
        //     borderColor: 'yellow',
        // },

    },
    submit: {
        margin: theme.spacing( 3, 0, 2 )
    },
    containerLink: {
        color: theme.palette.primary.dark,
        '& a': {
            color: theme.palette.secondary.contrastText,
            '&:active': {
                color: theme.palette.primary.dark
            }
        }
    },
    copyright: {
        '& a': {
            color: theme.palette.primary.text,
            '&:active': {
                color: theme.palette.primary.dark
            }
        }
    },
} ) )

export const customTheme2 = createMuiTheme( {
    palette: {
        primary: {
            light: '#ff669a',
            main: '#ff4081',
            dark: '#b22c5a',
            error: "#f44336",
            text: 'rgba(0, 0, 0, 0.87)',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ed4b82',
            main: '#e91e63',
            dark: '#a31545',
            contrastText: '#000'
        },
    }
} )

export const useStyles2 = makeStyles( theme => ( {
    paper: {
        marginTop: theme.spacing( 8 ),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing( 1 ),
        backgroundColor: theme.palette.primary.main,
    },
    avatarError: {
        margin: theme.spacing( 1 ),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing( 1 ),
        '& fieldset': {
            borderLeftWidth: 6,
        },
        '& .MuiInputBase-root:hover fieldset': {
            borderColor: theme.palette.primary.light,
        },
        '& input + fieldset': {
            borderColor: theme.palette.primary.main,
        }
    },
    submit: {
        margin: theme.spacing( 3, 0, 2 )
    },
    containerLink: {
        '& a': {
            color: theme.palette.primary.main,
            '&:active': {
                color: theme.palette.primary.main
            }
        }
    },
    copyright: {
        '& a': {
            color: theme.palette.primary.main,
            '&:active': {
                color: theme.palette.primary.main
            }
        }
    },
} ) )

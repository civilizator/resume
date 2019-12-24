import { createMuiTheme, makeStyles } from "@material-ui/core/styles"

export const customTheme = createMuiTheme( {
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

export const useStyles = makeStyles( theme => ( {
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

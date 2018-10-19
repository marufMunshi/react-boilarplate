import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Container from './styled/Container';

const StyledPaper = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '10px 30px',
        marginBottom: '10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    }
})(Paper)

const HomePage = () => (
    <Container>
        <StyledPaper>
            <Typography variant="h1" gutterBottom>
                h1. Heading
            </Typography>
        </StyledPaper>

        <Button variant="contained" color="primary">
            Click Me!
        </Button>
        <Button variant="outlined" color="primary">
            Click Me!
        </Button>

        <Typography variant="h1" gutterBottom>
            h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
            h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
            h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
            h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
            h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
            h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" gutterBottom>
            button text
        </Typography>
        <Typography variant="caption" gutterBottom>
            caption text
        </Typography>
        <Typography variant="overline" gutterBottom>
            overline text
        </Typography>
    </Container>
)

export default HomePage

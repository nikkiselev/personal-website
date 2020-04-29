import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListSubheader,
  ListItem,
} from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import Skills from './Skills'

const year = 2014
const years = new Date().getFullYear() - year

const SkilsSection = () => (
  <Container maxWidth="md">
    <Grid container>
      <Grid item xs={12}>
        <Box textAlign={{ xs: 'center' }}>
          <PageSubTitle text="Skill Set" />

          <Typography>
            These are the skills I've picked up over my {years} years as a
            professional developer.
          </Typography>

          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Skills />
            </Grid>

            {/* <Grid item xs={12} sm={6}>

              <List>
                <ListSubheader>Other things I’m familiar with:</ListSubheader>
                <ListItem>
                  Frontend - CSS, SASS, BEM, Bootstrap, Styled Components, CSS Modules, Material-UI
                </ListItem>
                <ListItem>
                  Frontend - CSS, SASS, BEM, Bootstrap, Styled Components, CSS Modules, Material-UI
                </ListItem>
                <ListItem>
                  Frontend - CSS, SASS, BEM, Bootstrap, Styled Components, CSS Modules, Material-UI
                </ListItem>
                <ListItem>
                  Frontend - CSS, SASS, BEM, Bootstrap, Styled Components, CSS Modules, Material-UI
                </ListItem>
              </List>

            Other things I’m familiar with:
              Frontend - CSS, SASS, BEM, Bootstrap, Styled Components, CSS Modules, Material-UI
              Frontend tools - npm, yarn, Webpack, Babel
              APIs - REST, JSON APIs, SOAP
              Testing - Unit / Integration testing
              Design practices - TDD, SOLID, DRY, YAGNI, KISS
              Authentication - OAuth 1 & 2, JWT
              Project management - AGILE, Jira, Trello
              Github Pages, Vercel (Zeit) Now.
            </Grid> */}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </Container>
)

export default SkilsSection

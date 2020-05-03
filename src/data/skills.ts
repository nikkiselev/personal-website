import { Skill } from '../types'

const languages: Skill[] = [
  {
    name: 'TypeScript',
    years: 5,
  },
  {
    name: 'JavaScript',
    years: 6,
  },
  {
    name: 'PHP',
    years: 6,
  },
  {
    name: 'Swift',
    years: 1,
  },
]

const frontEnd: Skill[] = [
  {
    name: 'React.js',
    years: 1,
  },
  {
    name: 'Next.js',
    years: 1,
  },
  {
    name: 'Vue.js',
    years: 2,
  },
]

const backEnd: Skill[] = [
  {
    name: 'Node.js',
    years: 1,
  },
  {
    name: 'Express.js',
    years: 1,
  },
  {
    name: 'Laravel',
    years: 4,
  },
]

const deployment: Skill[] = [
  {
    name: 'AWS',
    years: 4,
  },
  {
    name: 'Nginx / Apache2',
    years: 5,
  },
]

const storages: Skill[] = [
  {
    name: 'MongoDB',
    years: 1,
  },
  {
    name: 'MySQL',
    years: 8,
  },
  {
    name: 'Redis',
    years: 1,
  },
]

const other: Skill[] = [
  {
    name: 'Building REST APIs',
    years: 3,
  },
  {
    name: 'Git / Github / Bitbucket',
    years: 5,
  },
]

export default [
  {
    name: 'Languages',
    skills: languages,
    // misc: ['TDD', 'SOLID', 'DRY', 'YAGNI', 'KISS'],
  },
  {
    name: 'Front End',
    skills: frontEnd,
    misc: [
      'Build Tools',
      'ESLint',
      'CSS Preprocessors',
      'CSS in JS',
      'CSS Frameworks',
      'Material-UI',
    ],
  },
  {
    name: 'Back End',
    skills: backEnd,
    misc: ['REST', 'SOAP', 'OAuth', 'JWT'],
  },
  {
    name: 'Deployment',
    skills: deployment,
    misc: ['GitHub Pages', 'Vercel (Zeit) Now', 'Laravel Forge'],
  },
  {
    name: 'Data Storage',
    skills: storages,
    misc: ['AWS RDS', 'MariaDB', 'MongoDB Atlas'],
  },
  {
    name: 'Other',
    skills: other,
    misc: ['AGILE', 'Jira', 'Trello', 'TDD', 'SOLID', 'DRY', 'YAGNI', 'KISS'],
  },
]

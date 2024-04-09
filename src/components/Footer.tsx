import React from 'react'

import { Whisper } from '../typography'
import BulletSeparator from './BulletSeparator'
import Link from './Link'
import BodySection from './BodySection'
import { makeStyles } from '@material-ui/styles'

import { SearchEngineNames } from '../data'
import packageJson from '../../package.json'

const SITE_VERSION = packageJson.version

const useStyles = makeStyles({
  contactLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 24,
    paddingBottom: 16,
    '& p': {
      textAlign: 'center',
      paddingBottom: 4,
    },
  },
})

const searchEngineNames = SearchEngineNames.join(', ')

const Footer: React.FC = () => {
  const classes = useStyles()

  return <footer></footer>
}

export default Footer

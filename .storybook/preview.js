import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'fusion-light',
    values: [
      {
        name: 'fusion-light',
        value: theme.colors.white
      },
      {
        name: 'fusion-dark',
        value: theme.colors.primary
      }
    ]
  }
}


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]

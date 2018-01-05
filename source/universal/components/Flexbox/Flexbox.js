/* @flow */

import styled from 'styled-components'

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${props => props.theme.flexDirection};
  justify-content: ${props => props.theme.justifyContent};
  border: 1px black solid;
  width: 100%;
`

export default Flexbox

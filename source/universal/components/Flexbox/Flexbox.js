/* @flow */

import styled from 'styled-components'

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${props => props.theme.flexDirection};
  justify-content: ${props => props.theme.justifyContent};
  align-items: ${props => props.align ?  props.align : null}
`

export default Flexbox

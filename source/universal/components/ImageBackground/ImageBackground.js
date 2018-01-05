/* @flow */

import styled from 'styled-components'

export const ImageBackground = styled.div`
  background-size: ${props => props.theme.backgroundSize};
  background-position: ${props => props.theme.backgroundPosition};
  background-repeat: ${props => props.theme.backgroundRepeat};
  background-image: url(${props => props.backgroundImage});
  border-radius:  ${props => props.round ? '50%' : null};
`

export default ImageBackground

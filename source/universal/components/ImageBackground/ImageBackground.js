/* @flow */

import styled from 'styled-components'

export const ImageBackground = styled.div`
  background-size: ${props => props.theme.backgroundSize};
  background-position: ${props => props.theme.backgroundPosition};
  background-repeat: ${props => props.theme.backgroundRepeat};
  background-image: url(${props => props.backgroundImage});
`

export default ImageBackground

/* @flow */

import styled from 'styled-components'

export const Gradient = styled.div`
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  background: ${props => props.colors[0]};
  background: -webkit-linear-gradient(${props => props.direction}, ${props => props.colors[0]}, ${props => props.colors[1]});
  background: -o-linear-gradient(${props => props.direction}, ${props => props.colors[0]}, ${props => props.colors[1]});
  background: -moz-linear-gradient(${props => props.direction}, ${props => props.colors[0]}, ${props => props.colors[1]});
  background: linear-gradient(${props => props.direction}, ${props => props.colors[0]}, ${props => props.colors[1]});  
`

export default Gradient
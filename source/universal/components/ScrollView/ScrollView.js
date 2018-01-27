/* @flow */

import styled from 'styled-components'

export const ScrollView = styled.div`
  display: flex;
  flex-direction: ${props => props.orientation === 'vertical' ? 'column' : 'row'};
  overflow-x: ${props => props.orientation === 'vertical' ? 'hidden' : 'auto'};
  overflow-y: ${props => props.orientation === 'horizontal' ? 'hidden' : 'auto'};
`

export default ScrollView

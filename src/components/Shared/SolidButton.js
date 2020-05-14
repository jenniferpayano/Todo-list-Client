import styled from 'styled-components'

const SolidButton = styled.button`
  border-color: ${props => props.primaryColor};
  border-radius: 20px;
  border-width: 2px;
  background-color: ${props => props.primaryColor};
  color: white;
  font-size: 1.2rem;
  padding: 10px 40px;
  transition: color .2s linear, background-color .2s linear;
  &:hover {
    background-color: white;
    color: ${props => props.primaryColor};
  }
`

export default SolidButton

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledButton = styled.input`
    padding : 16px 24px 16px 24px;
    border-radius: 4px;
    background-color: #5D78FF;
    border : 0;
    color : white;
    border-color: none;
    font-size : 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    transition : all .8s;
    &:hover{
        border : 3px solid #5D78FF;
        background-color : white;
        color : #5D78FF;

    }
`;

class Button extends Component {
  handleClick = event => {
    event.preventDefault()
    this.props.handler && this.props.handler()
  }

  render = () => {
    return (
      <StyledButton
        type={this.props.type === 'submit' ? 'submit' : 'button'}
        onClick={() => (this.handleClick(event))}
        value='Submit' />
    )
  }
}

Button.propTypes = {
  handler: PropTypes.func,
  type: PropTypes.string
}

export default Button;

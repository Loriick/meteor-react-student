import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledInput = styled.input`
width : 355px;
height: 72px;
transition : .2s;
font-size : 17px;
padding : 37px 25px 15px;
outline : none;
border : none;
    &:focus{
          border-left : 8px solid red;
          padding-left : 16px;
          transition : .4s;
      }
`;

class Input extends Component {
  state = {
    data: {
      name: "",
    },
  };

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  render = () => {
    return (
      <form>
      <StyledInput
        type='text'
        name='name'
        onChange={this.handleChange}
        value={this.state.data.name} />
      </form>
    )
  }
}

Input.propTypes = {
  handler: PropTypes.func,
  type: PropTypes.string
}

export default Input;

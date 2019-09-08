import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { sign_in } from "../api/sign-in";
import { sign_in_sucess } from "../modules/sign-in";
import { Redirect } from "react-router-dom";
import axios from "axios";

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  margin-bottom: 20px;
`;

const StyleButton = styled.button`
  width: 400px;
  height: 50px;
`;

class Login extends Component {
  state = {
    id: "",
    password: "",
    message: ""
  };

  handleChangeId = event => {
    this.setState({ id: event.currentTarget.value });
  };

  handleChangePw = event => {
    this.setState({ password: event.currentTarget.value });
  };

  handleChangeClick = async () => {
    const { id, password } = this.state;

    try {
      const user = await sign_in(id, password);
      console.log(user);
      this.props.sign_in_sucess(user.data);
      this.props.history.push("/list");
    } catch (e) {
      this.setState({
        id: "",
        password: "",
        message: "아이디,비밀번호가 일치하지 않습니다"
      });
    }
  };

  render() {
    return (
      <LoginPage>
        <StyledInput
          type="text"
          value={this.state.id}
          onChange={this.handleChangeId}
        />
        <StyledInput
          type="password"
          value={this.state.password}
          onChange={this.handleChangePw}
        />
        {this.state.message && <span>{this.state.message}</span>}
        <StyleButton type="button" onClick={this.handleChangeClick}>
          로그인
        </StyleButton>
      </LoginPage>
    );
  }
}

const mapStateToProps = (state, props) => {
  return Object.assign(props, {
    signed_in: state.account && state.account.id
  });
};

const mapDispatchToProps = disptch => {
  return {
    sign_in_sucess: account => disptch(sign_in_sucess(account))
  };
};

const connectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export default connectedLogin;

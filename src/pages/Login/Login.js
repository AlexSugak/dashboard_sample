import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  validate,
  validateForm,
  loginValidationSchema
} from '../../validation';
import log from '../../logger';

class Login extends Component {
  constructor(props) {
    super(props);
    this.touchAll = this.touchAll.bind(this);
  }

  handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      this.props.history.push('/dashboard_sample');
    }, 800);
  };

  touchAll(setTouched, errors) {
    setTouched({
      username: true,
      password: true
    });

    validateForm('loginForm', errors);
  }

  render() {
    log.info('render', 'Login');
    return (
      <div className="App">
        <div className="app flex-row align-items-center">
          <Formik
            initialValues={{ username: '', password: '' }}
            validate={validate(loginValidationSchema)}
            onSubmit={this.handleSubmit}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid
            }) => (
              <Container>
                <Row className="justify-content-center">
                  <Col md="5">
                    <CardGroup>
                      <Card className="p-4">
                        <CardBody>
                          <Form
                            onSubmit={handleSubmit}
                            noValidate
                            name="loginForm"
                          >
                            <h1>Login</h1>
                            <p className="text-muted">
                              Sign In to your account
                            </p>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-user" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="text"
                                autoFocus={true}
                                name="username"
                                id="username"
                                valid={!errors.username}
                                invalid={touched.username && !!errors.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Username"
                                autoComplete="username"
                                value={values.username}
                              />
                              <FormFeedback className="login-error">
                                {errors.username}
                              </FormFeedback>
                            </InputGroup>
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-lock" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="password"
                                name="password"
                                id="password"
                                valid={!errors.password}
                                invalid={touched.password && !!errors.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Password"
                                autoComplete="current-password"
                                value={values.password}
                              />
                              <FormFeedback className="login-error">
                                {errors.password}
                              </FormFeedback>
                            </InputGroup>
                            <Row>
                              <Col xs="6" className="text-left">
                                <Button
                                  type="submit"
                                  color="primary"
                                  className="px-4"
                                  disabled={isSubmitting || !isValid}
                                >
                                  Login
                                </Button>
                              </Col>
                              <Col xs="6" className="text-right">
                                <Button color="link" className="px-0">
                                  Forgot password?
                                </Button>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </Container>
            )}
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};

export { Login };

import React, { Component } from 'react';
import { Row, Col, Form, Input, Icon, Button, Select } from 'antd';
import '../styles/HttpParameters.css'

const { Option } = Select;

const data = [
  { label: 'Starkcore', value: 'starkcore' },
  { label: 'API 2', value: 2 },
  { label: 'API 3', value: 3 }
];

const options = [];

data.forEach(response => options.push(<Option key={response.value.toString()}>{response.label.toString()}</Option>));

export class HttpParameters extends Component {

  componentDidMount = () => {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onHandleSubmit(values);
      }
    });
  };

  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  getFieldDecorator = (idField, require, messages) => {
    return this.props.form.getFieldDecorator(`${idField}`, {
      rules: [{ required: require, message: `${messages}` }]
    });
  };

  render() {
    const { isFieldTouched, getFieldError, getFieldsError } = this.props.form;

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const optionApiError = isFieldTouched('options') && getFieldError('options');

    return (
      <div className={'contentHttpParam'}>
        <Form layout='inline' onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form.Item validateStatus={optionApiError ? 'error' : ''} help={optionApiError || ''}>
                {this.getFieldDecorator('options', true, 'Please selected one options!')(<Select style={{ width: 200 }}>{options}</Select>)}
              </Form.Item>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                {this.getFieldDecorator(
                  'username',
                  true,
                  'Please input your username!'
                )(<Input prefix={<Icon type='user' className={'iconHttpParam'} />} placeholder='Username' />)}
              </Form.Item>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                {this.getFieldDecorator(
                  'password',
                  true,
                  'Please input your Password!'
                )(<Input prefix={<Icon type='lock' className={'iconHttpParam'} />} type='password' placeholder='Password' />)}
              </Form.Item>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form.Item>
                <Button type='primary' htmlType='submit' disabled={this.hasErrors(getFieldsError())}>
                  Send
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

HttpParameters = Form.create({ name: 'HttpParametersForms' })(HttpParameters);

export default HttpParameters;

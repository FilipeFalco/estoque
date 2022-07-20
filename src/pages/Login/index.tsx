import { Button, Checkbox, Col, Form, Input, message, Row } from 'antd';
import { supabase } from '../../services/supabase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

const Login = () => {
  const { signIn, user } = useAuth();
  const history = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    const { error } = await signIn({
      email: values.email,
      password: values.password,
    });
    if (error) {
      message.error('Erro ao realizar login!');
      console.log(error);
    } else {
      message.success('Login realizado com sucesso!');
      history('/');
    }
  };

  if (user) {
    return <Navigate to='/' />;
  }

  return (
    <Row align='middle' style={{ height: '100vh' }}>
      <Col
        xs={19}
        sm={19}
        md={15}
        lg={10}
        xl={10}
        style={{
          backgroundColor: '#1e232a',
          justifyContent: 'center',
          margin: '0 auto',
          padding: '40px 0',
          borderRadius: '10px',
        }}
      >
        <Form
          name='basic'
          labelCol={{ span: 3 }}
          style={{ margin: '0px 40px' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label='E-mail'
            name='email'
            rules={[
              { type: 'email', message: 'Insira um e-mail válido!' },
              { required: true, message: 'Email é obrigatório!' },
            ]}
          >
            <Input type='email' />
          </Form.Item>

          <Form.Item
            label='Senha'
            name='password'
            rules={[{ required: true, message: 'Senha é obrigatório!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 3, span: 19 }}
          >
            <Checkbox>Lembrar Login</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{ offset: 3, span: 19 }}
            style={{ marginBottom: '0' }}
          >
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;

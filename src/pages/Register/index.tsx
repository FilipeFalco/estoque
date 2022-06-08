import { Button, Col, Form, Input, message, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
const Register = () => {
  const history = useNavigate();
  const { signUp } = useAuth();

  const onFinish = async (values: { email: string; password: string }) => {
    const { error } = await signUp({
      email: values.email,
      password: values.password,
    });

    if (error) {
      message.error('Erro ao realizar o cadastro!');
      console.log(error);
    } else {
      message.success('Cadastro realizado com sucesso!');
      history('/login');
    }
  };

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
            label='Senha'
            name='confirm'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'É necessário confirmar a senha',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('As duas senhas inseridas não estão iguais')
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder='Confirme a senha' />
          </Form.Item>

          <Form.Item
            wrapperCol={{ offset: 3, span: 19 }}
            style={{ marginBottom: '0' }}
          >
            <Button type='primary' htmlType='submit'>
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;

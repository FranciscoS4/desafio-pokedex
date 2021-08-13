import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

import * as Yup from 'yup';
import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit= useCallback(async(data :SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data ,{
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password,
      });

      

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      } else {
        
      }

    }
  }, [signIn]);

  return (
    <Container>
        <Content>
          <img src={ Logo } alt="Light"/>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Comece a coletar pokémons!</h1>

            <Input name="email" placeholder="Email"/>

            <Input name="password" placeholder="Senha" type="password"/>
            
            <button type="submit">Entrar</button>
            
          </Form>
        </Content>
      <Background/>
    </Container>
  );
}

export default Login;
import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled('form')<React.FormHTMLAttributes<HTMLFormElement>>`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  padding: 1.2rem 1rem;
  min-width: 240px;
  max-width: 95vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  position: relative;
  @media (max-width: 480px) {
    min-width: 90vw;
    padding: 0.7rem 0.3rem;
  }
`;

const Header = styled.h2`
  text-align: center;
  margin: 0;
  font-weight: 600;
  font-size: 1.2rem;
  color: #222;
  letter-spacing: 0.2px;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled('label')<React.LabelHTMLAttributes<HTMLLabelElement>>`
  font-weight: 500;
  color: #444;
  font-size: 0.95rem;
`;

const Input = styled('input')<React.InputHTMLAttributes<HTMLInputElement>>`
  padding: 0.45rem 0.6rem 0.45rem 0.7rem;
  border-radius: 7px;
  border: 1.2px solid #222;
  font-size: 0.98rem;
  outline: none;
  background: #fafafa;
  color: #222;
  transition: border 0.2s;
  width: 100%;
  &:focus {
    border-color: #111;
  }
`;

const ErrorMsg = styled.div`
  color: #c62828;
  text-align: center;
  font-weight: 500;
  font-size: 0.95rem;
`;

const LoginButton = styled('button')<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background: #222;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0.55rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  letter-spacing: 0.2px;
  transition: background 0.2s, transform 0.1s;
  margin-top: 0.2rem;
  &:hover {
    background: #111;
  }
  &:active {
    transform: scale(0.97);
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }
    setError('');
    alert('Login Success!');
  };

  return (
    <PageContainer>
      <LoginCard onSubmit={handleSubmit}>
        <Header>เข้าสู่ระบบ</Header>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </InputGroup>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <LoginButton type="submit">เข้าสู่ระบบ</LoginButton>
      </LoginCard>
    </PageContainer>
  );
};

export default Login;

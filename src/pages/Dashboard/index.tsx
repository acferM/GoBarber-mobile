import React from 'react';

import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Button onPress={signOut}>SignOut</Button>
    </Container>
  );
};

export default Dashboard;

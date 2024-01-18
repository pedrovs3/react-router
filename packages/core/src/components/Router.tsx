import React from 'react';
import { AuthContextProvider, RouterContextProvider } from '../context';
import { Switch } from './Switch';

interface RouterProps {
  children: React.ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => (
  <RouterContextProvider>
    <AuthContextProvider>
      <Switch>{children}</Switch>
    </AuthContextProvider>
  </RouterContextProvider>
);

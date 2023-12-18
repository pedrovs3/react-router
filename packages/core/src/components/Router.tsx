import React from 'react';
import { RouterContextProvider } from '../context';
import { Switch } from './Switch';

interface RouterProps {
  children: React.ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => (
  <RouterContextProvider>
    <Switch>
      {children}
    </Switch>
  </RouterContextProvider>
);

import React from 'react';
import { RouterContextProvider } from '../context';

interface RouterProps {
  children: React.ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => (
  <RouterContextProvider>
    {children}
  </RouterContextProvider>
);

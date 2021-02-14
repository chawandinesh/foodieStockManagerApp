import React from 'react';
import {View, Text} from 'react-native';
import Route from './src/routes/route';
import {Context} from './src/screens/context';

export default function App() {
  return (
    <Context>
      <Route />
    </Context>
  );
}

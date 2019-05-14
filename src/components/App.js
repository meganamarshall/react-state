import React from 'react';
import ColorPicker from './ColorPicker';

export default function App() {
  const colors = ['red', 'green', 'blue'];
  return <ColorPicker colors={colors} />;
}

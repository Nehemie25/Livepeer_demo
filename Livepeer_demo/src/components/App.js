import logo from './logo.svg';
import './App.css';
import Home from '../pages/Home'
import {Livepeer} from './Livepeer'
import {Form} from '../pages/Form'

import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
 
const client = createReactClient({
  provider: studioProvider({ apiKey: 'f3d2df2d-064b-45f3-8745-5c5eb90b7ff8' }),
});
 
const livepeerTheme: ThemeConfig = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};
 
function App() {
  return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
      <Livepeer />
      <Form/>
    </LivepeerConfig>
  );
}

export default App;

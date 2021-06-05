import { ChakraProvider } from '@chakra-ui/react';
import { ChainId, Config, DAppProvider } from '@usedapp/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const config: Config = {
  readOnlyChainId: ChainId.Kovan,
  readOnlyUrls: {
    [ChainId.Kovan]:
      'https://kovan.infura.io/v3/97be263e18b44c9daf8b04eb1dcc05aa',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

import React, { useState } from 'react';
import './App.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Spinner } from '@chakra-ui/spinner';
import Logo from './Logo';
const App = () => {
  const [connecting, setConnecting] = useState(false);
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  const onConnectClick = () => {
    activateBrowserWallet();
    setConnecting(true);
  };

  return (
    <Flex minHeight="100vh" direction="column">
      <HStack
        as="header"
        p={5}
        mb={5}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        color="white"
      >
        <Logo />
        <Heading>useDapp</Heading>
      </HStack>
      <Box as="main" overflow="hidden">
        <Container>
          <VStack spacing={4} alignItems="flex-start">
            {account && (
              <>
                <Button onClick={() => deactivate()}>Disconnect</Button>
                <Text fontWeight={600}>Account {account}</Text>
              </>
            )}
            {!account && <Button onClick={onConnectClick}>Connect</Button>}
            <Divider></Divider>
            {etherBalance && (
              <Stat>
                <StatLabel>Ether Balance</StatLabel>
                <StatNumber>{formatEther(etherBalance)}</StatNumber>
                <StatHelpText>{new Date().toLocaleTimeString()}</StatHelpText>
              </Stat>
            )}
            {!etherBalance && connecting && <Spinner></Spinner>}
          </VStack>
        </Container>
      </Box>
      <footer></footer>
    </Flex>
  );
};

export default App;

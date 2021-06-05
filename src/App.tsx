import React, { useState, useEffect } from 'react';
import './App.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';

const App = () => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <Flex minHeight="100vh" direction="column">
      <header></header>
      <Box as="main" overflow="hidden">
        <Container>
          <VStack spacing={4} alignItems="flex-start">
            <div>
              <Button onClick={() => activateBrowserWallet()}>Connect</Button>
            </div>
            {account && <Text fontWeight={600}>Account {account}</Text>}
            <Divider></Divider>
            {etherBalance && (
              <Stat>
                <StatLabel>Balance</StatLabel>
                <StatNumber>{formatEther(etherBalance)}</StatNumber>
                <StatHelpText>{new Date().toLocaleTimeString()}</StatHelpText>
              </Stat>
            )}
          </VStack>
        </Container>
      </Box>
      <footer></footer>
    </Flex>
  );
};

export default App;

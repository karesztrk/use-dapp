import Icon from '@chakra-ui/icon';
import React from 'react';

const Logo = () => {
  return (
    <Icon w={10} h={10} viewBox="0 0 24 24">
      <path
        fill="#343434"
        d="M11.998,0l-0.161,0.547v15.869l0.161,0.161l7.366-4.354L11.998,0z"
      />
      <path fill="#8C8C8C" d="M11.998,0L4.631,12.223l7.366,4.354V8.874V0z" />
      <path
        fill="#3C3C3B"
        d="M11.998,17.972l-0.091,0.111v5.653L11.998,24l7.371-10.38L11.998,17.972z"
      />
      <path fill="#8C8C8C" d="M11.998,24v-6.028l-7.366-4.352L11.998,24z" />
      <path
        fill="#141414"
        d="M11.998,16.577l7.366-4.354l-7.366-3.348L11.998,16.577z"
      />
      <path fill="#393939" d="M4.631,12.223l7.366,4.354V8.874L4.631,12.223z" />
    </Icon>
  );
};

export default Logo;

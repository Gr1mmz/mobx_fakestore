import { Box, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      w='100%'
      p={4}
      bg='teal.600'
      color='#fff'
    >
      <Heading size='md'>FakeStore React+Mobx</Heading>
    </Box>
  );
};

export default Header;

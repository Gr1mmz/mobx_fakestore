import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stat,
  StatNumber,
  Tag,
} from '@chakra-ui/react';

const ProductItem = ({ item }) => {
  return (
    <Box
      w='250px'
      h='350px'
      p={4}
      borderWidth='1px'
    >
      <Tag>{item.category}</Tag>
      <Image
        w='150px'
        h='150px'
        objectFit='contain'
        margin='1em auto'
        src={item.image}
        alt={item.title}
      />
      <Heading
        size='sm'
        noOfLines={2}
        h='40px'
      >
        {item.title}
      </Heading>
      <HStack mt='1em'>
        <Stat>
          <StatNumber>{`$${item.price}`}</StatNumber>
        </Stat>
        <Button>+ Cart</Button>
      </HStack>
    </Box>
  );
};

export default ProductItem;

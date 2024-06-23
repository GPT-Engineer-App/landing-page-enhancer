import { Container, Text, VStack, Button, Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";

const testimonials = [
  {
    name: "Anna Kowalska",
    feedback: "Masaż Kobido to najlepsza rzecz, jaką zrobiłam dla swojej skóry. Efekty są niesamowite!",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jan Nowak",
    feedback: "Profesjonalna obsługa i widoczne rezultaty już po pierwszej wizycie. Polecam!",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold">Odzyskaj młody wygląd i naturalne piękno z masażem Kobido</Text>
        <Text fontSize="lg">Doświadcz japońskiej techniki masażu, która odmładza i relaksuje.</Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaThumbsUp />}>Zarezerwuj teraz</Button>
      </VStack>

      <Box mt={10} w="full">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Opinie naszych klientów</Text>
        <Flex direction={isMobile ? "column" : "row"} justify="space-around" align="center">
          {testimonials.map((testimonial, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" textAlign="center" mb={isMobile ? 4 : 0}>
              <Image borderRadius="full" boxSize="100px" src={testimonial.image} alt={testimonial.name} mb={4} />
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text mt={2}>{testimonial.feedback}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
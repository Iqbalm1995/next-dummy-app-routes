// app/page.tsx
"use client";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <Heading as="h3" size="lg">
          Home Page
        </Heading>
      </CardHeader>
      <CardBody>
        <Box w={"full"} minH={500}></Box>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

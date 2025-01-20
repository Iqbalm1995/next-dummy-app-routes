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

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <Heading as="h3" size="lg">
          Setting Page
        </Heading>
      </CardHeader>
      <CardBody>
        <Box w={"full"} minH={500}></Box>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

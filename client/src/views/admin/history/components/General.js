// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Pipeline 1 Description
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        This pipeline is built for a c++ based application
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Github repo URL'
          value='https://github.com/hamzafa1d1/TestingApp'
        />
        <Information
          boxShadow={cardShadow}
          title='Building Tool'
          value='Cmake'
        />
        <Information
          boxShadow={cardShadow}
          title='Testing Framework'
          value='GoogleTest'
        />
        <Information
          boxShadow={cardShadow}
          title='Containerization Tool'
          value='Docker'
        />
        <Information
          boxShadow={cardShadow}
          title='Deployment Platfrom'
          value='AWS'
        />
        <Information
          boxShadow={cardShadow}
          title='Creation Date'
          value='19 may 2023'
        />
        <Information
            boxShadow={cardShadow}
            title='Status'
            value='In Progress'
        />
      </SimpleGrid>
    </Card>
  );
}

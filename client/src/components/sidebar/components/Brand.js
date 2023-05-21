import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Text } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
        <Text
            fontSize="3xl"
            fontWeight="bold"
            color={useColorModeValue("navy.700", "white")}
            mt={2}
            mb={5}
        >
            PipelineFlow
        </Text>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;

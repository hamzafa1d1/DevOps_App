
import {
    Avatar,
    Box,
    Flex,
    IconButton,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
    FormControl,
    Input,
    Textarea,
    Button,
    Text,
    InputGroup,
    Checkbox,
} from "@chakra-ui/react";

import React, {useState} from "react";

import ComplexTable from "views/admin/home/components/ComplexTable";

import {
    columnsDataCheck,
    columnsDataComplex,
} from "views/admin/home/variables/columnsData";
import pipelineData1 from "views/admin/home/variables/pipelineData1.json" ;
import pipelineData2 from "views/admin/home/variables/pipelineData2.json" ;
import pipelineData3 from "views/admin/home/variables/pipelineData3.json" ;
import Banner from "./components/Banner";
export default function Home() {
    const textColorSecondary = "gray.400";
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const textColor = useColorModeValue("navy.700", "white");


    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
        <Box pt={{base: "130px", md: "80px", xl: "80px"}}>
            <Banner/>
            <Box bg={boxBg} p="4" mt="4">
                <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={pipelineData1}
                    title = "Pipeline 1"
                />
            </Box>
            <Box bg={boxBg} p="4" mt="4">
                <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={pipelineData2}
                    title = "Pipeline 2"
                />
            </Box>
            <Box bg={boxBg} p="4" mt="4">
                <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={pipelineData3}
                    title = "Pipeline 3"
                />
            </Box>
        </Box>
    );
}

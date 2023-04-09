/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  FormControl,
  Input,
  Textarea,
  Text,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  HStack,
  VStack } from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import Card from "components/card/Card";
import IconBox from "components/icons/IconBox";
import React, {useState} from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import Banner from "../pipelines/components/Banner";


export default function Pipelines() {

  const [formData, setFormData] = useState({
    description: '',
    name: '',
    email: '',
    message: ''
  });

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  // Form input change handler
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Banner />
      <Box bg={boxBg} p="4" mt="4">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Description</FormLabel>
                <Input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Write your description here!" style={{ width: "100%", height: "100px" }}/>
          </FormControl>
          <FormControl mt="4"></FormControl>
          <CheckboxGroup colorScheme='purple' >
            <VStack spacing={5} align="start">
              <Checkbox value='Discard Old builds'>Discard Old builds</Checkbox>
              <Checkbox value='Github project'>Github project</Checkbox>
              <Checkbox value='Throttle builds'>Throttle builds</Checkbox>
              <Checkbox value='Execute concurrent builds if necessary'>Execute concurrent builds if necessary</Checkbox>
            </VStack>
          </CheckboxGroup>
          <FormControl mt="4">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} />
          </FormControl>
          <Button mt="4" colorScheme={"gray"} type="submit">Submit</Button>
        </form>
      </Box>
    </Box>
  );
}

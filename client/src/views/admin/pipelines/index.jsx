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
  Button
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
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
import Card from "components/card/Card"


export default function Pipelines() {

  const [formData, setFormData] = useState({
    testingFramework: '',
    testFile: null,
    containerTool:'',
    AWSAccessKey: '',
    AWSSecretAccessKey: ''
  });

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.testingFramework)
    // handle form submission here
  };

  // Form input change handler
  const handleChange = (event) => {
    if (event.target.name === "testFile") {
      setFormData({ ...formData, testFile: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Banner />
      <Box bg={boxBg} p="4" mt="4">
        <form onSubmit={handleSubmit}>
          <Card p ='4' m='10px'>
            <FormControl mt ='4'>
              <FormLabel>Unit Testing Framework</FormLabel>
              <Select name="testingFramework" value={formData.testingFramework} onChange={handleChange}>
                <option value="google-test">Google Test</option>
                <option value="cppunit">CppUnit</option>
                <option value="boost-test">Boost.Test</option>
              </Select>
            </FormControl >
            <FormControl>
              <FormLabel>Upload Unit Test Code</FormLabel>
              <Button onClick={() => document.querySelector('input[type="file"]').click()}>
                Choose File
              </Button>
              <Input type="file" name="testFile" accept=".cpp,.h" style={{display: "none"}} />
            </FormControl>
          </Card>
          <Card m='10px'>
            <FormControl mt ='4'>
              <FormLabel>Containerization Tool</FormLabel>
              <Select name="containerTool" value={formData.containerTool} onChange={handleChange}>
                <option value="Docker">Docker</option>
                <option value="Podman">Podman</option>
                <option value="LXC">LXC</option>
              </Select>
            </FormControl>
          </Card>
          <Card m='10px'>
            <FormLabel>AWS access key</FormLabel>
            <Input type="text" name="AWSAccessKey" value={formData.AWSAccessKey} onChange={handleChange} />
            <FormLabel>AWS secret access key</FormLabel>
            <Input type="text" name="AWSSecretAccessKey" value={formData.AWSSecretAccessKey} onChange={handleChange} />
          </Card>
          <Button mt="4" colorScheme={"gray"} type="submit">Submit</Button>
        </form>
      </Box>
    </Box>
  );
}

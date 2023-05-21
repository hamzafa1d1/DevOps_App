// Chakra imports
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
    MdFileCopy, MdVisibility, MdVisibilityOff,
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
import Banner from "../history/components/Banner";
import Card from "components/card/Card"
import axios from "axios"
import General from "../history/components/General";
export default function Hist() {
    const textColorSecondary = "gray.400";
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const textColor = useColorModeValue("navy.700", "white");
    const [show, setShow] = React.useState(false);



    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
        <Box pt={{base: "130px", md: "80px", xl: "80px"}}>
            <Banner/>
            <Box bg={boxBg} p="4" mt="4">
                <General
                    gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
                    minH='365px'
                    pe='20px'
                />
            </Box>
        </Box>
    );
}

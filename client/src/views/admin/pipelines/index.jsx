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
import Banner from "../pipelines/components/Banner";
import Card from "components/card/Card"
import axios from "axios"
export default function Pipelines() {
    const textColorSecondary = "gray.400";
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const textColor = useColorModeValue("navy.700", "white");
    const [show, setShow] = React.useState(false);




    const [formData, setFormData] = useState({
        pipelineName:'',
        testingFramework: 'Google Test',
        testFile: null,
        containerTool: 'docker',
        awsAccessKey: '',
        awsSecretAccessKey: '',
        description: '',
        daysToKeepBuilds: '',
        githubURL: '',
        branchName: '',
        username: '',
        password: '',
        sshKey: '',
        maxOfBuildsToKeep: '',
    });
    const [isChecked, setIsChecked] = useState(false);
    const [discardBuilds, setDiscardBuilds] = useState(false);
    const [githubProject, setGithubProject] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showSSHkey, setShowSSHkey] = useState(false);
    const handlePasswordToggle = () => {

        setShowPassword(!showPassword);
    };
    const handleSSHkeyToggle = () => {
        setShowSSHkey(!showSSHkey);
    };

    const handleDiscardBuildsChange = (event) => {
        setDiscardBuilds(event.target.checked);
    };

    const handleGithubProjectChange = (event) => {
        setGithubProject(event.target.checked);
    };
    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        axios.post("http://localhost:8090/pipelineData", formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response =>{
            console.log(response) ;
        })
        // handle form submission here
    };
    // Form input change handler
    const handleChange = (event) => {
        if (event.target.name === "testFile") {
            setFormData({...formData, testFile: event.target.files[0]});
        } else {
            setFormData({...formData, [event.target.name]: event.target.value});
        }
    };
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
        <Box pt={{base: "130px", md: "80px", xl: "80px"}}>
            <Banner/>
            <Box bg={boxBg} p="4" mt="4">
                <form onSubmit={handleSubmit} >
                    <Card m='10px'>
                        <FormLabel>Your Pipeline's name here</FormLabel>
                        <Input type="text" name="pipelineName" value={formData.pipelineName} onChange={handleChange}/>
                    </Card>
                    <Card m='10px'>
                        <FormControl>
                            <FormLabel> Description </FormLabel>
                            <Input type="text" name="description" value={formData.description} onChange={handleChange}
                                   placeholder="Write your description here!" style={{width: "100%", height: "100px"}}/>
                        </FormControl>
                        <FormControl mt="4"></FormControl>
                    </Card>
                    <Card m='10px'>
                        <div style={{marginBottom: '1rem'}}>

                            <label>
                                <input
                                    type="checkbox"
                                    checked={discardBuilds}
                                    onChange={handleDiscardBuildsChange}
                                />
                                Discard Old Builds
                            </label>
                            {discardBuilds && (
                                <>
                                    <div>
                                        <FormControl>
                                            <FormLabel
                                                display='flex'
                                                ms='4px'
                                                fontSize='sm'
                                                fontWeight='500'
                                                color={textColor}
                                                mb='8px'>
                                                Days to keep builds<Text color={brandStars}>*</Text>
                                            </FormLabel>
                                            <Input
                                                name='daysToKeepBuilds'
                                                isRequired={true}
                                                variant='auth'
                                                fontSize='sm'
                                                ms={{base: "0px", md: "0px"}}
                                                type='text'
                                                mb='24px'
                                                fontWeight='500'
                                                size='lg'
                                                value={formData.daysToKeepBuilds}
                                                onChange={handleChange}
                                            />
                                            <FormLabel
                                                ms='4px'
                                                fontSize='sm'
                                                fontWeight='500'
                                                color={textColor}
                                                display='flex'>
                                                Max # of builds to keep<Text color={brandStars}>*</Text>
                                            </FormLabel>
                                            <InputGroup size='md'>
                                                <Input
                                                    name='maxOfBuildsToKeep'
                                                    isRequired={true}
                                                    fontSize='sm'
                                                    placeholder='type a number'
                                                    mb='24px'
                                                    size='lg'
                                                    type="text"
                                                    variant='auth'
                                                    value={formData.maxOfBuildsToKeep}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                        </FormControl>
                                    </div>
                                </>
                            )}
                        </div>
                    </Card>

                    <div style={{marginBottom: '1rem'}}>
                        <Card m='10px'>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={githubProject}
                                    onChange={handleGithubProjectChange}
                                    colorScheme="purple"
                                />
                                Github Project
                            </label>
                            {githubProject && (
                                <>
                                    <FormControl>
                                        <FormLabel
                                            display='flex'
                                            ms='4px'
                                            fontSize='sm'
                                            fontWeight='500'
                                            color={textColor}
                                            mb='8px'>
                                            Project url<Text color={brandStars}></Text>
                                        </FormLabel>
                                        <Input
                                            name='githubURL'
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            placeholder="https://github.com/user/repo.git"
                                            ms={{base: "0px", md: "0px"}}
                                            type='text'
                                            mb='24px'
                                            fontWeight='500'
                                            size='lg'
                                            value={formData.githubURL}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            display='flex'
                                            ms='4px'
                                            fontSize='sm'
                                            fontWeight='500'
                                            color={textColor}
                                            mb='8px'>
                                            Branch name<Text color={brandStars}>*</Text>
                                        </FormLabel>
                                        <Input
                                            name='branchName'
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            placeholder="master"
                                            ms={{base: "0px", md: "0px"}}
                                            type='text'
                                            mb='24px'
                                            fontWeight='500'
                                            size='lg'
                                            value={formData.branchName}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            display='flex'
                                            ms='4px'
                                            fontSize='sm'
                                            fontWeight='500'
                                            color={textColor}
                                            mb='8px'>
                                            Username<Text color={brandStars}></Text>
                                        </FormLabel>
                                        <Input
                                            name='username'
                                            isRequired={true}
                                            variant='auth'
                                            fontSize='sm'
                                            placeholder="Hamzafa1d1"
                                            ms={{base: "0px", md: "0px"}}
                                            type='text'
                                            mb='24px'
                                            fontWeight='500'
                                            size='lg'
                                            value={formData.username}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            display='flex'
                                            ms='4px'
                                            fontSize='sm'
                                            fontWeight='500'
                                            color={textColor}
                                            mb='8px'>
                                            Password<Text color={brandStars}></Text>
                                        </FormLabel>
                                        <Input
                                            name='password'
                                            isRequired={true}
                                            variant='auth'
                                            type={showPassword ? 'text' : 'password'}
                                            fontSize='sm'
                                            placeholder="******"
                                            ms={{base: "0px", md: "0px"}}
                                            mb='24px'
                                            fontWeight='500'
                                            size='lg'
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={handlePasswordToggle}
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                            }}
                                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        >
                                            {showPassword ? <MdVisibility/> : <MdVisibilityOff/>}
                                        </button>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            display='flex'
                                            ms='4px'
                                            fontSize='sm'
                                            fontWeight='500'
                                            color={textColor}
                                            mb='8px'>
                                            ssh Key<Text color={brandStars}>*</Text>
                                        </FormLabel>
                                        <Input
                                            name='sshKey'
                                            isRequired={true}
                                            variant='auth'
                                            type={showSSHkey ? 'text' : 'password'}
                                            fontSize='sm'
                                            placeholder="********"
                                            ms={{base: "0px", md: "0px"}}
                                            mb='24px'
                                            fontWeight='500'
                                            size='lg'
                                            value={formData.sshKey}
                                            onChange={handleChange}
                                        />
                                        <button
                                            type = "button"
                                            onClick={handleSSHkeyToggle}
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                            }}
                                            aria-label={showSSHkey ? 'Hide sshKey' : 'Show sshKey'}
                                        >
                                            {showSSHkey ? <MdVisibility/> : <MdVisibilityOff/>}
                                        </button>
                                    </FormControl>
                                </>
                            )}
                        </Card>
                    </div>

                    <Card p='4' m='10px'>
                        <FormControl mt='4'>
                            <FormLabel>Unit Testing Framework</FormLabel>
                            <Select name="testingFramework" value={formData.testingFramework} onChange={handleChange}>
                                <option value="google-test">Google Test</option>
                                <option value="cppunit">CppUnit</option>
                                <option value="boost-test">Boost.Test</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Upload Unit Test Code</FormLabel>
                            <Button onClick={() => document.querySelector('input[type="file"]').click()}>
                                Choose File
                            </Button>

                            <Input type="file" name="testFile" accept=".cpp,.h" style={{display: "none"}}
                                   onChange={handleChange}/>
                            {formData.testFile && <div>Selected file: {formData.testFile.name}</div>}

                        </FormControl>
                    </Card>
                    <Card m='10px'>
                        <FormControl mt='4'>
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
                        <Input type="text" name="awsAccessKey" value={formData.awsAccessKey} onChange={handleChange}/>
                        <FormLabel>AWS secret access key</FormLabel>
                        <Input type="text" name="awsSecretAccessKey" value={formData.awsSecretAccessKey}
                               onChange={handleChange}/>
                    </Card>
                    <Button  mt="4" colorScheme={"gray"} type="submit">Submit</Button>
                </form>
            </Box>
        </Box>
    );
}

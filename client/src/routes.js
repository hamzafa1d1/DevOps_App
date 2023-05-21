import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineRoute,
  MdHistory
} from "react-icons/md";

// Admin Imports

import Pipelines from "views/admin/pipelines" ;

// Auth Imports
import Home from "./views/admin/home";
import Hist from "./views/admin/history";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "/home",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
  {
    name: "Pipelines",
    layout: "/admin",
    path: "/pipelines",
    icon: <Icon as={MdOutlineRoute} width='20px' height='20px' color='inherit' />,
    component: Pipelines,
  },

  {
    name: "History",
    layout: "/admin",
    path: "/history",
    icon: <Icon as={MdHistory} width='20px' height='20px' color='inherit' />,
    component: Hist,
  },

];

export default routes;

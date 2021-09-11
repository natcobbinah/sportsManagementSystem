import Dashboard from "views/Dashboard.js";
import Supporters from "views/Supporters";
import Players from "views/players";
import Coaches from "views/coach";
import Teams from "views/Teams";
import Tickets from "views/tickets";
import Users from "views/users";
import ViewPlayers from "views/playersView";

const dashboardRoutes = [
  {
    path: "/admin/dashboard",
    name: "DASHBOARD",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "",
  },
  {
    path: "/admin/supporters",
    name: "TEAM SUPPORTERS",
    icon: "nc-icon nc-circle-09",
    component: Supporters,
    layout: "",
  },
  {
    path: "/admin/players",
    name: "ADD PLAYERS",
    icon: "nc-icon nc-notes",
    component: Players,
    layout: "",
  },
  {
    path: "/admin/viewplayers",
    name: "VIEW PLAYERS",
    icon: "nc-icon nc-notes",
    component: ViewPlayers,
    layout: "",
  },
  {
    path: "/admin/coaches",
    name: "COACHES",
    icon: "nc-icon nc-paper-2",
    component: Coaches,
    layout: "",
  },
  {
    path: "/admin/teams",
    name: "TEAMS",
    icon: "nc-icon nc-atom",
    component: Teams,
    layout: "",
  },
  {
    path: "/admin/tickets",
    name: "TICKETS",
    icon: "nc-icon nc-bell-55",
    component: Tickets,
    layout: "",
  },
  {
    path: "/admin/users",
    name: "USERS",
    icon: "nc-icon nc-bell-55",
    component: Users,
    layout: "",
  },
];

export default dashboardRoutes;

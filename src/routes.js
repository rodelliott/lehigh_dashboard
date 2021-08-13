import CustomFit from "views/CustomFit.js";
import Outfitters from "views/Outfitters.js";
import SafetyShoes from "views/SafetyShoes.js";
import SlipGrips from "views/SlipGrips.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import BrandLogos from "views/BrandLogos.js";
import Videos from "views/Videos.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/customfit",
    name: "CustomFit",
    icon: "nc-icon nc-chart-bar-32",
    component: CustomFit,
    layout: "/admin",
  },
  {
    path: "/outfitters",
    name: "Outfitters",
    icon: "nc-icon nc-chart",
    component: Outfitters,
    layout: "/admin",
  },
  {
    path: "/safetyshoes",
    name: "Safety Shoes",
    icon: "nc-icon nc-chart-pie-35",
    component: SafetyShoes,
    layout: "/admin",
  },
  {
    path: "/slipgrips",
    name: "SlipGrips",
    icon: "nc-icon nc-chart-pie-36",
    component: SlipGrips,
    layout: "/admin",
  },
  {
    path: "/brand-logos",
    name: "Brand Logos",
    icon: "nc-icon nc-layers-3",
    component: BrandLogos,
    layout: "/admin",
  },
  {
    path: "/videos",
    name: "Videos",
    icon: "nc-icon nc-cctv",
    component: Videos,
    layout: "/admin",
  },
  /*{
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },*/
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;

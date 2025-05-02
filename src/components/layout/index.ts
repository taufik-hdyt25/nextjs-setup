import dynamic from "next/dynamic";

export const Layout = dynamic(() => import("./Layout"));
export const Sidebar = dynamic(() => import("./SideBar"));

import { ReactNode } from "react";

interface ILayoutProps {
    children: ReactNode
}
const Layout: React.FC<ILayoutProps> = ({children}) => {
  return <div>{children}</div>;
};

export default Layout;

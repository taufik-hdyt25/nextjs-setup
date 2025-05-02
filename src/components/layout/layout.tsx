import { ReactNode } from "react";
import { Sidebar } from ".";

interface ILayoutProps {
  children: ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen w-screen">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;

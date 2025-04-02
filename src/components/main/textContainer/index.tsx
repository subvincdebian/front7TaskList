import { ReactNode } from "react";
import './style.css'

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <h1>Список справ</h1>
      {children}
    </div>
  );
};

export default Layout;

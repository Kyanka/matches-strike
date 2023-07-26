import { Header, HeaderProps } from "../components/Header";

interface LayoutProps {
  children?: React.ReactNode;
  headerProps?: HeaderProps;
}
export const GeneralLayout = ({ children, headerProps }: LayoutProps) => (
  <div className="w-full h-full">
    <Header />
    <main className="w-full px-20">{children}</main>
  </div>
);

import { Link } from "react-router-dom";

interface LinkProp {
  name: string;
  url: string;
}

export interface HeaderProps {
  links?: Array<LinkProp>;
}
export const Header = ({ links = [] }: HeaderProps) => (
  <header className="w-full h-24 px-20">
    {links && links.map((link) => <Link to="link.url" />)}
  </header>
);

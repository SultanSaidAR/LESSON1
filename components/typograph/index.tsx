import React, { Children, FC, ReactNode } from "react";
import H1 from "./header/h1";
import P from "./paragraph/p";

interface TypographProps {
  children: ReactNode;
  className?: string;
}

const Typograph: FC<TypographProps> & { h1: FC<TypographProps> } & {
  P: FC<TypographProps>;
} = ({ children, className }) => {
  return <>{children}</>;
};

Typograph.h1 = ({ children,className }) => {
  return <H1 className={className}>{children}</H1>;
};

Typograph.P = ({children,className})=>{
  return <P className={className}>{children}</P>
}

export default Typograph;

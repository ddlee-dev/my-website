import { CSSProperties, FC, ReactNode } from "react";
import Image from "next/image";
import styled from "./Badge.module.css";

export interface BadgeProps {
  children: ReactNode;
  icon?: string;
  style?: CSSProperties;
}

const Badge: FC<BadgeProps> = (props) => {
  const { icon, children, style = {} } = props;

  return (
    <span className={styled["badge"]} style={style}>
      {icon && <Image src={`/${icon}`} alt="" width={16} height={16} />}
      {children}
    </span>
  );
};

export default Badge;

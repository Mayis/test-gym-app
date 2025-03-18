import React from "react";
import Image from "next/image";
import { IconName, ICONS } from "@/components/common/icon/icon-data";

interface IconProps {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
}

const Icon = ({ name, size = 24, width: widthFromProps, height: heightFromProps, alt }: IconProps) => {
  const src = ICONS[name];
  const width = widthFromProps || size;
  const height = heightFromProps || size;

  return <Image src={src} width={width} height={height} alt={alt || name} priority />;
};

export default Icon;

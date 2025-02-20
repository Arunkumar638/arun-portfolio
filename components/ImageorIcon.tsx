import { FC } from "react";
// import { Tooltip } from 'antd';
import { Tooltip } from "react-tooltip";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

type IconOrImageProps = {
  icon?: React.ReactNode;
  imageUrl?: string;
  altText?: string;
  title?: string; // Tooltip text
};

const IconOrImage: FC<IconOrImageProps> = ({
  icon,
  imageUrl,
  altText,
  title,
}) => {
  if (icon) {
    return (
      <Tippy content={title}>
        <div>{icon}</div>
      </Tippy>
    ); // Render the icon with tooltip
  } else if (imageUrl) {
    return (
      <Tippy content={title}>
        <img
          src={imageUrl}
          alt={altText || "custom icon"}
          className="h-[1.5rem] w-[1.5rem] bg-transparent"
        />
      </Tippy>
    );
  }
  return null;
};

export default IconOrImage;

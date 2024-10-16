import { FC } from 'react';
import { Tooltip } from 'antd';

type IconOrImageProps = {
  icon?: React.ReactNode;
  imageUrl?: string;
  altText?: string;
  title?: string; // Tooltip text
};

const IconOrImage: FC<IconOrImageProps> = ({ icon, imageUrl, altText, title }) => {
  if (icon) {
    return <Tooltip title={title}><div>{icon}</div></Tooltip>;  // Render the icon with tooltip
  } else if (imageUrl) {
    return <Tooltip title={title}><img src={imageUrl} alt={altText || 'custom icon'}  className='h-[1.5rem] w-[1.5rem] bg-transparent' /></Tooltip>;
  }
  return null;
};

export default IconOrImage;
import './ContentCenter.css';

import { FC, ReactNode } from 'react';

interface ContentCenterProps {
  children: ReactNode;
}

const ContentCenter: FC<ContentCenterProps> = ({ children }) => {
  return <div className='ContentCenter'>{children}</div>;
};

export default ContentCenter;

import './ContentRight.css';

import { FC, ReactNode } from 'react';

interface ContentRightProps {
  children: ReactNode;
}

const ContentRight: FC<ContentRightProps> = ({ children }) => {
  return <div className='ContentRight'>{children}</div>;
};

export default ContentRight;

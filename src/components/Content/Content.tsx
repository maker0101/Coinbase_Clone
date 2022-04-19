import './Content.css';

import { FC, ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <div className='Content'>{children}</div>;
};

export default Content;

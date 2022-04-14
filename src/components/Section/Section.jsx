import './Section.css';

import classNames from 'classnames';

const Section = ({ children, width }) => {
  const sectionClasses = classNames({
    Section: true,
    'section-width-s': width === 's',
  });

  return <section className={sectionClasses}>{children}</section>;
};

export default Section;

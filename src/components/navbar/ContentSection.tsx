import type { FC } from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
  hideSideBar: Function;
}

// eslint-disable-next-line unused-imports/no-unused-vars
const ContentSection: FC<ContentSectionProps> = ({ children, hideSideBar }) => {
  return (
    <div
      className={`min-h-screen grow bg-backgroundOcare`}
      // onClick={() => hideSideBar()}
    >
      {children}
    </div>
  );
};

export default ContentSection;

import { OcareToast } from './Toast/OcareToast';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <OcareToast />
    </>
  );
};

export default Layout;

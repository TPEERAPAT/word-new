import Card from '@components/Card/Card';
import type { FC, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export const DrawerHead =
  'flex items-center gap-3 text-lg font-semibold text-blackOcare';

type DrawerProps = {
  hideDrawer: () => void;
  title?: string;
  headChildren?: ReactNode;
  children: ReactNode;
  display: boolean;
};

const Drawer: FC<DrawerProps> = ({
  hideDrawer,
  title,
  headChildren = null,
  children,
  display,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (display) {
      setShow(true);
    }
  }, [display]);

  function closeDrawer(): void {
    setShow(false);
    setTimeout(() => {
      hideDrawer();
    }, 100);
  }

  return (
    <div className="relative w-full">
      <div className={`absolute z-40 flex min-h-screen w-full bg-greyOcare/80`}>
        <div className="flex-1 cursor-pointer" onClick={closeDrawer} />
        <div
          className={`
            z-50 ml-auto min-w-[720px] max-w-[720px] transition-all
          `}
          style={
            show
              ? { transform: 'translateX(0%)' }
              : { transform: 'translateX(100%)' }
          }
        >
          <Card className="flex h-full flex-col rounded-l-none rounded-r-[0px] p-6">
            <div className="flex h-full flex-col">
              {/* Card Header */}
              <div className="flex flex-col">
                {headChildren || (
                  <div className="mb-4 flex">
                    <p className={DrawerHead}>{title}</p>
                    <div
                      onClick={closeDrawer}
                      className="ml-auto flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full text-greyOcare transition hover:bg-greyLightOcare active:bg-redOcareHover"
                    >
                      <IoCloseSharp size={22} />
                    </div>
                  </div>
                )}
                {/* underline */}
                <div className="h-[1px] w-full bg-greyBorder" />
              </div>

              {children}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

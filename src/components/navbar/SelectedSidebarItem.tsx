import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { RiCheckLine } from 'react-icons/ri';

interface SelectedSidebarItemProps {
  item: any;
  activeSubNav?: string;
}

const SelectedSidebarItem: FC<SelectedSidebarItemProps> = ({
  item,
  activeSubNav,
}) => {
  const [open, setOpen] = useState(true);

  if (item.subNav) {
    return (
      <div>
        <div
          className="flex h-14 cursor-pointer items-center opacity-70 transition hover:opacity-100"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="h-full w-[3px] bg-redOcare" />
          <div className="mx-4 my-0 flex h-6 w-6 self-center">
            <item.icon size={20} color="white" />
          </div>
          <p className="self-center text-base font-medium text-white">
            {item.name}
          </p>
          {open ? (
            <FiChevronUp size={20} className="ml-auto mr-3 text-white" />
          ) : (
            <FiChevronDown size={20} className="ml-auto mr-3 text-white" />
          )}
        </div>
        {open && (
          <div className="flex flex-col">
            {item.subNav.map((eachSubNav: any, i: number) => {
              return (
                <Link href={eachSubNav.link || '/404'} key={i}>
                  <div
                    className={`
                      ${
                        activeSubNav === eachSubNav.name
                          ? 'bg-blueDarkOcare'
                          : 'opacity-70 hover:opacity-100'
                      }
                      flex h-14 items-center transition
                    `}
                    data-testid={`sidebar-${eachSubNav.name}`}
                  >
                    <div className="h-full w-[3px] bg-redOcare" />
                    {activeSubNav === eachSubNav.name ? (
                      <RiCheckLine
                        size={20}
                        className="my-0 ml-6 mr-4 flex h-6 w-6 self-center text-white"
                      />
                    ) : (
                      <div className="my-0 ml-6 mr-4 flex h-6 w-6 self-center" />
                    )}
                    <p className="self-center text-sm font-medium text-white">
                      {eachSubNav.name}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }
  return (
    <Link href={item.link || '#'}>
      <div className="flex h-14 cursor-pointer bg-blueDarkOcare">
        <div className="h-full w-[3px] bg-redOcare" />
        <div className="mx-4 my-0 flex h-6 w-6 self-center">
          <item.icon size={20} color="white" />
        </div>
        <p className="self-center text-base font-medium text-white">
          {item.name}
        </p>
      </div>
    </Link>
  );
};

export default SelectedSidebarItem;

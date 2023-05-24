import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface SubNavItem {
  name: string;
  link?: string;
}

interface SidebarItem {
  name: string;
  link?: string;
  subNav?: SubNavItem[];
  icon: FC<{ size: number; color: string }>;
}

interface SelectedSidebarItemProps {
  item: SidebarItem;
}

const SelectedSidebarItem: FC<SelectedSidebarItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.subNav) {
    return (
      <div>
        <div
          className="flex h-14 cursor-pointer items-center opacity-70 transition hover:opacity-100"
          onClick={() => setOpen(!open)}
        >
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
            {item.subNav.map((eachSubNav: SubNavItem, i: number) => {
              return (
                <Link href={eachSubNav.link || '/404'} key={i}>
                  <div className="flex h-14 items-center opacity-70 transition hover:opacity-100">
                    <div className="my-0 ml-6 mr-4 flex h-6 w-6 self-center" />
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
      <div className="flex h-14 cursor-pointer opacity-70 transition hover:opacity-100">
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

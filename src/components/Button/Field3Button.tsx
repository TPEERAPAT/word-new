import { useState } from 'react';
import { IoCaretDown } from 'react-icons/io5';

import ButtonDropdown from './ButtonDropdown';
import Menu from './Menu';

export default function Field3Button() {
  const [dropdown, setdropdown] = useState('h-0 overflow-hidden');
  const [main, setmain] = useState('h-0 overflow-hidden');
  const [sub, setsub] = useState('h-0 overflow-hidden');
  const [menumid, setmenumid] = useState('hidden');
  const [menunorth, setmenunorth] = useState('hidden');
  const [menueast, setmenueast] = useState('hidden');
  const [menusouth, setmenusouth] = useState('hidden');

  function ShowandHide(sector: string): void {
    const hide = 'hidden';
    const show = 'block';
    switch (sector) {
      case 'dropdown':
        if (dropdown === 'h-0 overflow-hidden') {
          setdropdown('h-40 overflow-visble');
        } else {
          setdropdown('h-0 overflow-hidden');
          setmenumid(hide);
          setmenunorth(hide);
          setmenueast(hide);
          setmenusouth(hide);
        }
        break;
      case 'main':
        if (main === 'h-0 overflow-hidden') {
          setmain('h-auto overflow-visble');
        } else {
          setmain('h-0 overflow-hidden');
        }
        break;
      case 'sub':
        if (sub === 'h-0 overflow-hidden') {
          setsub('h-auto overflow-visble');
        } else {
          setsub('h-0 overflow-hidden');
        }
        break;
      case 'mid':
        if (menumid === 'hidden') {
          setmenumid(show);
        } else {
          setmenumid(hide);
        }
        break;
      case 'north':
        if (menunorth === 'hidden') {
          setmenunorth(show);
        } else {
          setmenunorth(hide);
        }
        break;
      case 'east':
        if (menueast === 'hidden') {
          setmenueast(show);
        } else {
          setmenueast(hide);
        }
        break;
      case 'south':
        if (menusouth === 'hidden') {
          setmenusouth(show);
        } else {
          setmenusouth(hide);
        }
        break;
      default:
        break;
    }
  }
  return (
    <div className="flex w-full flex-col items-center">
      <div className=" w-full" onClick={() => ShowandHide('sub')}>
        <ButtonDropdown name="หน่วยงานย่อยทั้งหมด" icon={IoCaretDown} />
      </div>
      <div className="z-20 mt-2 w-[238px]">
        <ul
          className={`absolute  w-[238px] list-none ${sub} rounded-lg bg-white shadow-md transition-all`}
        >
          <Menu name="หน่วยงานย่อย1" />
          <Menu name="หน่วยงานย่อย2" />
          <Menu name="หน่วยงานย่อย3" />
          <Menu name="หน่วยงานย่อย4" />
          <Menu name="หน่วยงานย่อย5" />
        </ul>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';

import ButtonDropdown from './ButtonDropdown';
import Menu from './Menu';

function BtnProvince() {
  const [dropdown, setdropdown] = useState('h-0 overflow-hidden');
  const [main, setmain] = useState('h-0 overflow-hidden');
  const [sub, setsub] = useState('h-0 overflow-hidden');
  const [menumid, setmenumid] = useState('hidden');
  const [menunorth, setmenunorth] = useState('hidden');
  const [menueast, setmenueast] = useState('hidden');
  const [menusouth, setmenusouth] = useState('hidden');

  function ShowAndHide(sector: string): void {
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
    <div className="z-20 flex w-[271px] flex-col items-center">
      <div className=" w-full" onClick={() => ShowAndHide('dropdown')}>
        <ButtonDropdown
          name="ทุกจังหวัด"
          icon={IoCaretDown}
          toggleDropdown={false}
        />
      </div>
      <div className="mt-2 w-[265px]">
        <ul
          className={` list-none ${dropdown} absolute w-[265px]  rounded-lg bg-white shadow-md transition-all`}
        >
          <li
            className="relative flex h-10 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100"
            onClick={() => ShowAndHide('mid')}
          >
            ภาคกลาง
            <IoCaretUp className="ml-2 fill-greyDarkOcare" />
            <div
              className={`${menumid} absolute left-[100%] top-2 ml-2 h-44 w-3/4 rounded-lg bg-white shadow-lg hover:block`}
            >
              <ul className=" list-none  rounded-lg bg-white">
                <Menu name="กรุงเทพมหานคร" sector="mid" />
              </ul>
            </div>
          </li>
          <li
            className="relative flex h-10 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100"
            onClick={() => ShowAndHide('north')}
          >
            ภาคเหนือ
            <IoCaretUp className="ml-2 fill-greyDarkOcare" />
            <div
              className={`${menunorth} absolute left-[100%] top-2 ml-2 h-44 w-3/4 rounded-lg bg-white shadow-lg hover:block`}
            >
              <ul className=" list-none  rounded-lg bg-white">
                <Menu name="เชียงใหม่" sector="north" />
              </ul>
            </div>
          </li>
          <li
            className="relative flex h-10 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100"
            onClick={() => ShowAndHide('east')}
          >
            ภาคอีสาน
            <IoCaretUp className="ml-2 fill-greyDarkOcare" />
            <div
              className={`${menueast} absolute left-[100%] top-2 ml-2 h-44 w-3/4 rounded-lg bg-white shadow-lg hover:block`}
            >
              <ul className=" list-none  rounded-lg bg-white">
                <Menu name="อุบล" sector="south" />
              </ul>
            </div>
          </li>
          <li
            className=" relative flex h-10 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100"
            onClick={() => ShowAndHide('east')}
          >
            ภาคใต้
            <IoCaretUp className="ml-2 fill-greyDarkOcare" />
            <div
              className={`${menusouth} absolute left-[100%] top-2 ml-2 h-44 w-3/4 rounded-lg bg-white shadow-lg hover:block`}
            >
              <ul className=" list-none  rounded-lg bg-white">
                <Menu name="กระบี่" sector="south" />
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default BtnProvince;

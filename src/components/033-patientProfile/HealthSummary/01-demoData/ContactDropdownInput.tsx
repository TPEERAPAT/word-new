import { ShowToast } from '@components/Toast/OcareToast';
import { useClickOutside } from 'hooks';
import { useRef, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMail } from 'react-icons/fi';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { RiPhoneLine } from 'react-icons/ri';

const ContactDropdownInput = () => {
  const [open, setOpen] = useState<boolean>(false);

  const selectRef = useRef<any>();

  useClickOutside(selectRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  const options = [
    {
      label: 'Email',
      icon: <FiMail className="text-greyDarkOcare" />,
      onClick: () => ShowToast('success', 'Email sent'),
    },
    {
      label: 'Call',
      icon: <RiPhoneLine size={20} className="text-greyDarkOcare" />,
      onClick: () => ShowToast('success', 'Calling...'),
    },
    {
      label: 'Video Call',
      icon: <HiOutlineVideoCamera size={20} className="text-greyDarkOcare" />,
      onClick: () => ShowToast('success', 'Video Calling...'),
    },
  ];

  return (
    <div className="relative" ref={selectRef}>
      <div
        className="flex h-[36px] w-[129px] cursor-pointer items-center justify-center gap-[6px] rounded-lg bg-blueOcare transition"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="flex text-sm font-normal text-white">ติดต่อ</div>
        {open ? (
          <FiChevronUp size={20} className="text-white" />
        ) : (
          <FiChevronDown size={20} className="text-white" />
        )}
      </div>
      {open && (
        <div className="absolute right-[0px] flex w-[140px] flex-col rounded-md bg-white shadow-lg">
          {options.map((option) => {
            return (
              <div
                key={option.label}
                className="flex cursor-pointer items-center gap-2 px-[18px] py-[9px] hover:bg-backgroundOcare"
                onClick={option.onClick}
              >
                <div className="flex w-[20px]">{option.icon}</div>
                <div className="flex flex-wrap text-sm">{option.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContactDropdownInput;

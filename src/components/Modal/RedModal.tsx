import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  icon?: React.ReactNode;
  title: string;
  text: string;
  cancel: boolean;
  confirm: () => void;
  onClose: () => void;
}

const RedModal: React.FC<ModalProps> = ({
  isOpen,
  icon,
  title,
  text,
  cancel,
  confirm,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsDialogOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsDialogOpen(false);
    onClose();
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isDialogOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDialogOpen]);

  return (
    <div
      className={`fixed inset-0 z-30 ${
        isDialogOpen ? 'flex items-center justify-center' : 'hidden'
      } overflow-y-auto bg-greyOcare/50`}
    >
      <div ref={modalRef} className="max-w-[500px]">
        <Card
          shadow
          className="flex flex-col items-center justify-center px-[78px] py-[42px]"
        >
          {icon && icon}
          <h2 className="mt-[30px] text-2xl font-bold">{title}</h2>
          <p className="mt-[8px] font-normal">{text}</p>
          <div className="mt-6 flex w-full gap-6">
            {cancel && (
              <Button
                type="outlined"
                size="full"
                bold
                text="ยกเลิก"
                onClick={onClose}
                isLoading={isLoading}
              />
            )}
            <Button
              type="contained-red"
              size="full"
              bold
              text="ยืนยัน"
              onClick={async () => {
                setIsLoading(true);
                await confirm();
                setIsLoading(false);
              }}
              isLoading={isLoading}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RedModal;

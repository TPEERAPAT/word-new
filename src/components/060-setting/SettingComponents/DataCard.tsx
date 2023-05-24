import type { ReactNode } from 'react';

interface IDataCard {
  children: ReactNode;
}

const DataCard: React.FC<IDataCard> = ({ children }) => {
  return (
    <div
      className="
        group relative my-5 h-[90%] 
        w-full max-w-[1400px] rounded-2xl bg-[#F2F2F7]
      "
    >
      <div className="h-full w-full bg-cover bg-center duration-500">
        {children}
      </div>
    </div>
  );
};

export default DataCard;

import { FiSearch } from 'react-icons/fi';

interface ButtonProps {
  msg: string;
  pic?: 'search' | 'more' | 'doc';
  type: 'pri' | 'sec';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchButton: React.FunctionComponent<ButtonProps> = ({
  msg,
  pic,
  type,
  // eslint-disable-next-line unused-imports/no-unused-vars
  onClick,
}) => {
  function childrenComp() {
    if (pic === 'search') {
      return (
        <div className="flex place-content-center items-center px-6">
          {/* <Image src={SearchPic} alt="" width={14} height={14}/> */}
          <FiSearch size={14} />
          <h2 className="ml-3 text-sm font-medium">{msg}</h2>
        </div>
      );
    }
    if (pic === 'more') {
      return (
        <div className="flex place-content-center px-6">
          <h2 className="mr-3 text-sm font-medium">{msg}</h2>
        </div>
      );
    }
    return (
      <div className="place-content-center">
        <h2 className="text-sm font-medium">{msg}</h2>
      </div>
    );
  }

  function theButton() {
    let buttonStyle =
      'p.1.5 rounded-lg shadow-md shadow-opacity-25 h-[40px] w-full font-sans cursor-pointer border-none ';
    if (type === 'pri') {
      buttonStyle += ' bg-blueOcare text-white';
    } else if (type === 'sec') {
      buttonStyle = ' bg-white text-blueOcare';
    }
    return <button className={buttonStyle}>{childrenComp()}</button>;
  }

  return <>{theButton()}</>;
};

export default SearchButton;

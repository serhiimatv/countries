import { FC } from 'react';
import SearchIcon from '../components/SearchIcon';

const SearchInput: FC = () => {
  return (
    <>
      <div className="dark:bg-HeaderDark bg-trasition flex h-12 w-full items-center rounded-[5px] bg-white">
        <SearchIcon />
        <input
          className="placeholder:text-textPlaceholder h-full w-full bg-transparent outline-none placeholder:font-normal
                    dark:placeholder:text-white"
          placeholder="Search for a country…"
        />
      </div>
    </>
  );
};

export default SearchInput;

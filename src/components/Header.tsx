import { FC } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header: FC = () => {
  return (
    <>
      <header
        className="dark:bg-HeaderDark bg-white px-4 py-8 
                        shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]"
      >
        <div className="mx-auto flex max-w-7xl justify-between">
          <span className="text-sm font-extrabold text-black md:text-2xl dark:text-white">
            Where in the world?
          </span>
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
};

export default Header;

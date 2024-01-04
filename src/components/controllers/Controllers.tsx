import { FC } from 'react';
import SearchInput from './searchinput/SearchInput';
import SelectInput from './selectinput/SelectInput';

const Controllers: FC = () => {
  return (
    <>
      <div className="relative mt-6 flex flex-col">
        <SearchInput />
        <SelectInput />
      </div>
    </>
  );
};

export default Controllers;

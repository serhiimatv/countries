import { FC } from 'react';
import SearchInput from './searchinput/SearchInput';
import SelectInput from './selectinput/SelectInput';

const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Controllers: FC = () => {
  return (
    <>
      <div className="relative mt-6 flex flex-col justify-between md:flex-row">
        <SearchInput />
        <SelectInput value="Filter by Region" options={options} />
      </div>
    </>
  );
};

export default Controllers;

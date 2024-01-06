import { Dispatch, FC, SetStateAction } from 'react';
import SearchInput from './searchinput/SearchInput';
import SelectInput from './selectinput/SelectInput';

interface IProps {
  options: string[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const Controllers: FC<IProps> = ({ options, filter, setFilter }) => {
  return (
    <>
      <div className="relative mt-6 flex flex-col justify-between md:flex-row">
        <SearchInput />
        <SelectInput
          value="Filter by Region"
          options={options}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
    </>
  );
};

export default Controllers;

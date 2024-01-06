'use client';
import { FC, useEffect, useState } from 'react';
import Controllers from '../controllers/Controllers';
import Countries from './Countries';
import { IState } from '@/types';

interface IProps {
  state: IState[];
  regions: string[];
}

const MainContent: FC<IProps> = ({ state, regions }) => {
  const [countries, setCountries] = useState<IState[]>();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    setCountries(state);
  }, []);

  useEffect(() => {
    if (filter !== '') {
      setCountries(state.filter((item) => item.region === filter));
    }
  }, [filter]);

  return (
    <>
      <Controllers options={regions} setFilter={setFilter} filter={filter} />
      <Countries state={countries} />
    </>
  );
};

export default MainContent;

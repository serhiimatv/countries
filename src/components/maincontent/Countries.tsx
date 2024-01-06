'use client';
import { FC } from 'react';
import Image from 'next/image';
import { IState } from '@/types';

interface IProps {
  state: IState[] | undefined;
}

const Countries: FC<IProps> = ({ state }) => {
  return (
    <>
      <div className="px-9 py-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr]">
          {state?.map((state, index) => (
            <article
              key={index}
              className="bg-trasition rounded-[5px] bg-white shadow-[0px_0px_7px_2px_rgba(0,0,0,0.03)] dark:bg-HeaderDark"
            >
              <div className="relative aspect-[1.6/1] w-full rounded-t-[5px]">
                <Image
                  src={state.flags.svg}
                  alt="usa"
                  className="rounded-t-[5px] object-cover"
                  fill
                />
              </div>
              <div className=" rounded-b-[5px] p-6">
                <h2 className="text-lg font-extrabold">{state.name.common}</h2>
                <p className="mt-4 text-sm font-semibold">
                  Population:{' '}
                  <span className="font-light">{state.population.toLocaleString('en')}</span>
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Region: <span className="font-light">{state.region}</span>
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Capital: <span className="font-light">{state.capital}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;

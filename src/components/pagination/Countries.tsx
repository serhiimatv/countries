'use client';
import { FC } from 'react';
import Image from 'next/image';
import usa from '../../assets/usa.svg';

const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Countries: FC = () => {
  return (
    <>
      <div className="px-9 py-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr]">
          {test.map((i, index) => (
            <article
              key={index}
              className="rounded-[5px] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.03)]"
            >
              <div className="relative aspect-[1.6/1] w-full rounded-t-[5px]">
                <Image src={usa} alt="usa" className="rounded-t-[5px] object-cover" fill />
              </div>
              <div className="bg-trasition rounded-b-[5px] bg-white p-6 dark:bg-HeaderDark">
                <h2 className="text-lg font-extrabold">United States of America</h2>
                <p className="mt-4 text-sm font-semibold">
                  Population: <span className="font-light">206,135,893</span>
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Region: <span className="font-light">Americas</span>
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Capital: <span className="font-light">Washington, D.C.</span>
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

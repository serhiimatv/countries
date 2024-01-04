'use client';
import { FC, useEffect, useState } from 'react';
import React from 'react';
import { useTheme } from 'next-themes';

const SelectInput: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return <></>;
};

export default SelectInput;

'use client';

import React from 'react';
import { IconType } from 'react-icons';

interface CategoryInputPrpos {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputPrpos> = ({ icon, label, selected, onClick }) => {
  return <div onClick={() => onClick(label)}>{label}</div>;
};

export default CategoryInput;

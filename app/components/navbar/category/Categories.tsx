'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import CategoryBox from './CategoryBox';

import { categories } from '@/app/data-provider/categories';
import Container from '../../Container';

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-autoÂ
        "
      >
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} selected={category === item.label} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

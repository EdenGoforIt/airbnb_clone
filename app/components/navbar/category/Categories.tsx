'use client';

import { categories } from '@/app/data-provider/categories';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../../Container';
import CategoryBox from './CategoryBox';

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();
  const isMainPage = pathName === '/';

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
        overflow-x-auto"
      >
        {categories.map((item) => (
          <CategoryBox key={item.label} icon={item.icon} label={item.label} selected={category === item.label} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

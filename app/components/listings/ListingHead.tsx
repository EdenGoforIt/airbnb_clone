import { SafeUser } from '@/app/types';

interface ListingHeadProps {
  id: string;
  locationValue: string;
  imageSrc: string;
  title: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({ currentUser, locationValue, imageSrc, id, title }) => {
  return <div></div>;
};

export default ListingHead;

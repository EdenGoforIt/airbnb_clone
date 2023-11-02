'use client';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useFavorite from '../hooks/useFavorite';
import { SafeUser } from '../types';

interface HeartButtonProps {
  listingId: string;
  currentUser: SafeUser | null | undefined;
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId, currentUser }) => {
  const { hasFavorite, toggleFavorite } = useFavorite({ listingId, currentUser });

  return (
    <div onClick={toggleFavorite} className="relative hover:opacity-80 transition cursor-pointer">
      <AiOutlineHeart size={28} className="fill-white absolute " />
      <AiFillHeart size={28} className={hasFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'} />
    </div>
  );
};

export default HeartButton;

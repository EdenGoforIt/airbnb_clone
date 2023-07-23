'use client';
import Image from 'next/image';

interface AvartarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvartarProps> = ({ src }) => {
  return (
    <Image
      alt="avatar"
      className="rounded-full"
      height="30"
      width="30"
      src={src || '/images/placeholder.jpg'}
    />
  );
};
export default Avatar;

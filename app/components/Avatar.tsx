'use client';
import Image from 'next/image';

interface AvartarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvartarProps> = ({ src }) => {
  console.log("🚀 ~ file: Avatar.tsx:9 ~ src:", src)
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

'use client'
import clsx from 'clsx';

export const Header = () => {
  console.log('HEADER')
  return (
    <h1
      className={clsx(
        'text-2xl',
        'text-blue-300',
        'bg-blue-50',
        'hover:bg-blue-800',
        'hovertext-white',
        'transition-all',
        'duration-700',
      )}
      onClick={() => alert('Olá')}
    >My Title</h1>
  );
};

import React from 'react';
import { Button } from '../../ui/Button/Button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import type { Movie } from '../../../interfaces/movie';

interface FavoriteButtonProps {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: (movie: Movie) => void;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  movie,
  isFavorite,
  onToggleFavorite,
  className = '',
}) => {
  return (
    <button
      onClick={() => onToggleFavorite(movie)}
      className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-800 transition-colors duration-200 ${className}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? (
        <FaHeart size={20} className='text-red-500' />
      ) : (
        <FaRegHeart size={20} className='text-neutral-400 hover:text-red-500' />
      )}
    </button>
  );
};

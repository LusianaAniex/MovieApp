import { useHome } from './useHome';
import { Button } from '../../ui/Button/Button';
import { HeroSlider } from '../../container/Hero/HeroSlider';
import MovieCard from '../../container/MovieCard';
import { HeroSection } from '../../container/Hero/index';
import { useState, useEffect } from 'react';
import { Carousel } from '../../container/Carousel';
import { SkeletonHero, SkeletonMovieCard } from '../../ui/Skeleton';

export const Homepage: React.FC = () => {
  const {
    trendingMovies,
    newReleaseMovies,
    loading,
    error,
    hasMoreMovies,
    loadMoreMovies,
  } = useHome();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [colCount, setColCount] = useState(5);
  const [rowsToShow, setRowsToShow] = useState(2);
  useEffect(() => {
    function updateColCount() {
      const width = window.innerWidth;
      if (width < 640) setColCount(2); //
      else if (width < 768) setColCount(2); //
      else if (width < 1024) setColCount(3); //
      else if (width < 1280) setColCount(4); //
      else setColCount(5); //
    }
    updateColCount();
    window.addEventListener('resize', updateColCount);
    return () => window.removeEventListener('resize', updateColCount);
  }, []);
  const newReleaseCardsToShow = newReleaseMovies.slice(
    0,
    rowsToShow * colCount
  );

  if (loading) {
    return (
      <div className='mx-auto'>
        {/* Hero skeleton */}
        <SkeletonHero />

        {/* Trending Now skeleton */}
        <section className='px-4 sm:px-15 lg:px-25 xl:px-35 mb-8 md:mb-12'>
          <div className='h-10 bg-gray-700 rounded w-48 mb-4 md:mb-6 animate-pulse' />
          <div className='flex gap-3 overflow-hidden'>
            {[...Array(6)].map((_, i) => (
              <div key={i} className='min-w-[150px]'>
                <SkeletonMovieCard size='small' />
              </div>
            ))}
          </div>
        </section>

        {/* New Release skeleton */}
        <section className='px-4 sm:px-15 lg:px-25 xl:px-35'>
          <div className='h-10 bg-gray-700 rounded w-48 mb-4 md:mb-6 animate-pulse' />
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4'>
            {[...Array(10)].map((_, i) => (
              <SkeletonMovieCard key={i} size='large' />
            ))}
          </div>
        </section>
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='mx-auto'>
      {/* Hero Section */}
      {trendingMovies.length > 0 && (
        <HeroSlider items={trendingMovies} paused={isModalOpen}>
          {(movie) => (
            <HeroSection
              movie={movie}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </HeroSlider>
      )}

      {/* Trending Now */}
      <section className='px-4 sm:px-15 lg:px-25 xl:px-35 mb-8 md:mb-12'>
        <div className='flex items-center justify-between mb-4 md:mb-6'>
          <h2 className='text-display-xs md:text-display-lg font-bold pb-2'>
            Trending Now
          </h2>
        </div>
        <Carousel movies={trendingMovies.slice(0, 20)} />
      </section>

      {/* New Release */}
      <section className='px-4 sm:px-15 lg:px-25 xl:px-35'>
        <div className='relative'>
          <h2 className='text-display-xs md:text-display-lg font-bold mb-4 md:mb-6 pb-2'>
            New Release
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4'>
            {newReleaseCardsToShow.map((movie) => (
              <MovieCard key={`new-${movie.id}`} movie={movie} size='large' />
            ))}
          </div>
          {hasMoreMovies && (
            <div className='w-full h-[200px] md:h-[400px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center z-50'>
              <Button
                variant='secondary'
                className='translate-y-5 md:translate-y-10 shadow-2xl'
                onClick={() => {
                  setRowsToShow((prev) => prev + 2);
                  loadMoreMovies();
                }}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Homepage;

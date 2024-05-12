import { useState, useEffect } from 'react';

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleResize = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

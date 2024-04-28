import { useState, useEffect } from 'react';
// import debounce from 'lodash.debounce';

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleResize = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };
    // Устанавливаем задержку в 200 миллисекунд
    // const handleResize = debounce(() => {
    //   if (media.matches !== matches) {
    //     setMatches(media.matches);
    //   }
    // }, 20);
    // Первоначальная установка состояния
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Добавляем обработчик событий с использованием debounce
    window.addEventListener('resize', handleResize);

    // Возвращаем функцию очистки
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

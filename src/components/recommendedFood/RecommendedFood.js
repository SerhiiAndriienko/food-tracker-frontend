import { useEffect, useState } from 'react';

export const products = [
  {
    nutrition: {
      carbohydrates: 3.6,
      protein: 2.9,
      fat: 0.4,
    },
    _id: '65870488d330513c3b11a6ad',
    name: 'Spinach',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Spinach.png',
    calories: 23,
  },
  {
    nutrition: {
      carbohydrates: 15.5,
      protein: 5.7,
      fat: 3.1,
    },
    _id: '65870488d330513c3b11a6c0',
    name: 'Oats',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Oats.png',
    calories: 65,
  },
  {
    nutrition: {
      carbohydrates: 2,
      protein: 8,
      fat: 5,
    },
    _id: '65870488d330513c3b11a6b5',
    name: 'Tofu',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Tofu.png',
    calories: 80,
  },
  {
    nutrition: {
      carbohydrates: 9,
      protein: 1,
      fat: 0.3,
    },
    _id: '65870488d330513c3b11a6b7',
    name: 'Carrots',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Carrots.png',
    calories: 41,
  },
  {
    nutrition: {
      carbohydrates: 0,
      protein: 26.7,
      fat: 3.6,
    },
    _id: '65870488d330513c3b11a6c3',
    name: 'Tuna',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Tuna.png',
    calories: 149,
  },
  {
    nutrition: {
      carbohydrates: 10,
      protein: 3,
      fat: 2,
    },
    _id: '65870488d330513c3b11a6b2',
    name: 'Vegetable Soup',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Vegetable_Soup.png',
    calories: 50,
  },
  {
    nutrition: {
      carbohydrates: 9,
      protein: 1,
      fat: 0.3,
    },
    _id: '65870488d330513c3b11a6b8',
    name: 'Onions',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Onions.png',
    calories: 40,
  },
  {
    nutrition: {
      carbohydrates: 4,
      protein: 1,
      fat: 0.2,
    },
    _id: '65870488d330513c3b11a6ba',
    name: 'Tomatoes',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Tomatoes.png',
    calories: 22,
  },
  {
    nutrition: {
      carbohydrates: 20,
      protein: 1.6,
      fat: 0.1,
    },
    _id: '65870488d330513c3b11a6bb',
    name: 'Sweet Potatoes',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Sweet_Potatoes.png',
    calories: 86,
  },
  {
    nutrition: {
      carbohydrates: 15,
      protein: 22,
      fat: 55,
    },
    _id: '65870488d330513c3b11a6be',
    name: 'Nuts',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Nuts.png',
    calories: 650,
  },
  {
    nutrition: {
      carbohydrates: 0,
      protein: 21.8,
      fat: 12.6,
    },
    _id: '65870488d330513c3b11a6c2',
    name: 'Salmon',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Salmon.png',
    calories: 202,
  },
  {
    nutrition: {
      carbohydrates: 4.7,
      protein: 4.3,
      fat: 0.4,
    },
    _id: '65870488d330513c3b11a6c6',
    name: 'Dark leafy greens',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Dark_leafy_greens.png',
    calories: 25,
  },
  {
    nutrition: {
      carbohydrates: 8.5,
      protein: 2,
      fat: 14.7,
    },
    _id: '65870488d330513c3b11a6bc',
    name: 'Avocado',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Avocado.png',
    calories: 160,
  },
  {
    nutrition: {
      carbohydrates: 22.3,
      protein: 8.7,
      fat: 0.4,
    },
    _id: '65870488d330513c3b11a6bd',
    name: 'Beans',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Beans.png',
    calories: 123,
  },
  {
    nutrition: {
      carbohydrates: 23.8,
      protein: 9.2,
      fat: 1.2,
    },
    _id: '65870488d330513c3b11a6c1',
    name: 'Lentils',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Lentils.png',
    calories: 90,
  },
  {
    nutrition: {
      carbohydrates: 21.3,
      protein: 4.4,
      fat: 1.9,
    },
    _id: '65870488d330513c3b11a6af',
    name: 'Quinoa',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Quinoa.png',
    calories: 120,
  },
  {
    nutrition: {
      carbohydrates: 14,
      protein: 0.3,
      fat: 0.2,
    },
    _id: '65870488d330513c3b11a6aa',
    name: 'Apples',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Apples.png',
    calories: 52,
  },
  {
    nutrition: {
      carbohydrates: 3,
      protein: 1,
      fat: 0.3,
    },
    _id: '65870488d330513c3b11a6b6',
    name: 'Celery',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Celery.png',
    calories: 16,
  },
  {
    nutrition: {
      carbohydrates: 7.68,
      protein: 0.67,
      fat: 0.3,
    },
    _id: '65870488d330513c3b11a6ab',
    name: 'Strawberries',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Strawberries.png',
    calories: 32,
  },
  {
    nutrition: {
      carbohydrates: 14.49,
      protein: 0.74,
      fat: 0.33,
    },
    _id: '65870488d330513c3b11a6ac',
    name: 'Blueberries',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Blueberries.png',
    calories: 57,
  },
  {
    nutrition: {
      carbohydrates: 0,
      protein: 31,
      fat: 3.6,
    },
    _id: '65870488d330513c3b11a6b1',
    name: 'Chicken Breast',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Chicken_Breast.png',
    calories: 165,
  },
  {
    nutrition: {
      carbohydrates: 72,
      protein: 12,
      fat: 4,
    },
    _id: '65870488d330513c3b11a6b3',
    name: 'Buckwheat',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Buckwheat.png',
    calories: 340,
  },
  {
    nutrition: {
      carbohydrates: 14.7,
      protein: 1.7,
      fat: 0.7,
    },
    _id: '65870488d330513c3b11a6c5',
    name: 'Berries',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Berries.png',
    calories: 54,
  },
  {
    nutrition: {
      carbohydrates: 8.8,
      protein: 3.3,
      fat: 0.9,
    },
    _id: '65870488d330513c3b11a6ae',
    name: 'Kale',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Kale.png',
    calories: 49,
  },
  {
    nutrition: {
      carbohydrates: 3.6,
      protein: 10,
      fat: 0.4,
    },
    _id: '65870488d330513c3b11a6b0',
    name: 'Greek Yogurt',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Greek_Yogurt.png',
    calories: 59,
  },
  {
    nutrition: {
      carbohydrates: 1,
      protein: 13,
      fat: 11,
    },
    _id: '65870488d330513c3b11a6b4',
    name: 'Eggs',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Eggs.png',
    calories: 155,
  },
  {
    nutrition: {
      carbohydrates: 3,
      protein: 0.7,
      fat: 0.1,
    },
    _id: '65870488d330513c3b11a6b9',
    name: 'Cucumbers',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Cucumbers.png',
    calories: 15,
  },
  {
    nutrition: {
      carbohydrates: 6.6,
      protein: 2.8,
      fat: 0.4,
    },
    _id: '65870488d330513c3b11a6bf',
    name: 'Broccoli',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Broccoli.png',
    calories: 34,
  },
];

const getRandomProducts = (data, count) => {
  const randomData = [...data];
  for (let i = randomData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomData[i], randomData[j]] = [randomData[j], randomData[i]];
  }
  return randomData.slice(0, count);
};

const RecommendedFood = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const randomProducts = getRandomProducts(products, 2);
    setRandomProducts(randomProducts);
  }, []);

  return (
    <div>
      <p>Recommended food</p>
      <div>
        <ul>
          {randomProducts.map(product => (
            <li key={product.name}>
              <img src={product.img} alt="product" width={46} />
              <div>
                <li> {product.name}</li>
                <div>
                  <li> {product.amount}</li>
                  <li> {product.calories} calories</li>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button>See more</button>
    </div>
  );
};

export default RecommendedFood;

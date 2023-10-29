import { useEffect, useState } from 'react';
import Card from '../Card';
import { CardType } from '../Card/types';

import './Result.scss';

export default function Result() {
  const [data, setData] = useState<CardType[]>([]);
  console.log(data);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('products.json');

      const data = await response.json();

      setData(data);
    }

    getData();
  }, []);

  return (
    <main className="result">
      <div className="container">
        <h1 className="title">Результат</h1>
        <p className="message">
          Мы подобрали для вас наиболее подходящие средства
        </p>
        {JSON.stringify(data) !== '[]' && (
          <div className="cards">
            { data.map(item => <Card {...item} />) }
          </div>
        )}
      </div>
    </main>
  );
}

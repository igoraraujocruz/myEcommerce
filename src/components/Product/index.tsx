import { createServer } from 'miragejs';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

createServer({
  routes() {
    this.get('/api/products', () => ({
      movies: [
        {
          id: 1,
          name: 'boné dos cria',
          price: 50,
          category: 'boné',
          thumbnail:
            'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
          images: [
            {
              id: 1,
              url: 'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
            },
          ],
          colors: {
            red: true,
            black: true,
            green: false,
          },
        },
        {
          id: 2,
          name: 'boné dos cria',
          price: 50,
          category: 'boné',
          thumbnail:
            'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
          images: [
            {
              id: 1,
              url: 'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
            },
          ],
          colors: {
            red: true,
            black: true,
            green: false,
          },
        },
        {
          id: 3,
          name: 'boné dos cria',
          price: 50,
          category: 'boné',
          thumbnail:
            'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
          images: [
            {
              id: 1,
              url: 'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
            },
          ],
          colors: {
            red: true,
            black: true,
            green: false,
          },
        },
        {
          id: 4,
          name: 'boné dos cria',
          price: 50,
          category: 'boné',
          thumbnail:
            'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
          images: [
            {
              id: 1,
              url: 'https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp',
            },
          ],
          colors: [
            {
              id: 1,
              name: 'red',
              amount: 3,
            },
            {
              id: 2,
              name: 'green',
              amount: 5,
            },
            {
              id: 3,
              name: 'black',
              amount: 2,
            },
            {
              id: 4,
              name: 'orange',
              amount: 0,
            },
          ],
        },
      ],
    }));
  },
});

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json.movies);
      });
  }, []);

  return (
    <>
      <div className={styles.headerCategory}>
        <div id={styles.category}>
          <img src="https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp" alt="category" />
          <span>Bonés</span>
        </div>
        <div id={styles.category}>
          <img src="https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp" alt="category" />
          <span>Bonés</span>
        </div>
        <div id={styles.category}>
          <img src="https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp" alt="category" />
          <span>Bonés</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {products.map(product => (
            <section>
              <img src={product.thumbnail} alt={product.category} />
              <h3>{product.name}</h3>
              <h4>R${product.price}</h4>
              <div className={styles.details}>
                <button type="button">Detalhes</button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

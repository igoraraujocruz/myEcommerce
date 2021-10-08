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
      <div id={styles.slider}>
        <figure>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_652858-MLB45455601791_042021-O.webp"
            alt="bone"
          />
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="bone"
          />
          <img
            src="https://static1.bigstockphoto.com/5/2/4/large1500/425168726.jpg"
            alt="bone"
          />
          <img
            src="https://static3.bigstockphoto.com/6/2/4/large1500/426043262.jpg"
            alt="bone"
          />
        </figure>
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

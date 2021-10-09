import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Form } from '@unform/web';
import Input from '../Input';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <h1>Forja Ecommerce</h1>
          <Form onSubmit={() => console.log('teste')}>
            <Input
              className={styles.search}
              name="search"
              icon={BiSearchAlt2}
            />
          </Form>
          <HiOutlineShoppingCart size={25} />
        </nav>
      </div>
    </header>
  );
}

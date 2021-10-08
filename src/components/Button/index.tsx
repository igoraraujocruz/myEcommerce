import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button type="button" {...rest} className={styles.container}>
    {children}
  </button>
);

export default Button;

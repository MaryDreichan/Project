import React from 'react';
import styles from './errorComponent.module.scss';

const ErrorComponent = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
}

export default ErrorComponent;
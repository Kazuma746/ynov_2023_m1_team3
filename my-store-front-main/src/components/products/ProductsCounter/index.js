import React from 'react';

const Index = ({ productsLength }) => {
  return (
    <span>
      {productsLength} produit{productsLength > 1 ? 's' : ''}
    </span>
  );
}

export default Index;

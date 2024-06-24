import React from 'react';
import Portfolio from './Portfolio';
import { portfolios } from '../../utils/data';

const PortfolioList = () => {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
      {portfolios.map((portfolio, index) => (
        <Portfolio
          index={index}
          title={portfolio.title}
          description={portfolio.description}
        />
      ))}
    </div>
  );
};

export default PortfolioList;

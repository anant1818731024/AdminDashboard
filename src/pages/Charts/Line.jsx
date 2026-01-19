import React from 'react';

import { ChartsHeader, LineChart } from '../../components';
import { lineCustomSeries } from '../../data/dummy';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart lineCustomSeries={lineCustomSeries}/>
    </div>
  </div>
);

export default Line;

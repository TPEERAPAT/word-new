import React from 'react';

const NoData = ({ dataName }: { dataName: string }) => {
  return (
    <div>
      <h2>no {dataName}</h2>
    </div>
  );
};

export default NoData;

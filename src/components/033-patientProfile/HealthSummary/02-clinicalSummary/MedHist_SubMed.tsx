import React from 'react';

const SubMedicine = ({ subMed, color }: { subMed: any; color: string }) => {
  const styles = {
    background: color,
  };

  const eachSubMed = subMed.map((item: any) => {
    return (
      <div
        className="mt-4 flex items-center rounded-lg px-6 py-2"
        style={styles}
        key={`${item.DateTime} ${item.Value}`}
      >
        <p className="mr-3 w-40">{item.DateTime}</p>
        <p className="mr-6 w-96 text-sm">{item.Value}</p>
        <p className="mr-3 w-52">???</p>
        <p className="w-28">{item.Location}</p>
      </div>
    );
  });

  return <div>{eachSubMed}</div>;
};

export default SubMedicine;

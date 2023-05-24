import Card from '@components/Card/Card';
import React from 'react';

import CustomerDetail from './CustomerDetail';
import ListHist from './ListHist';
import Overview from './Overview';

// eslint-disable-next-line unused-imports/no-unused-vars
const CustomerProfile = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-3 p-3 sm:gap-6 sm:p-6">
      <Card className="rounded-md p-3 sm:rounded-lg sm:p-6" shadow={true}>
        <Overview data="" />
      </Card>
      <CustomerDetail data="" />
      <span className="h-[1px] w-full bg-gray-300" />
      <Card className="rounded-md p-3 sm:rounded-lg sm:p-6" shadow={true}>
        <ListHist data="" />
      </Card>
    </div>
  );
};

export default CustomerProfile;

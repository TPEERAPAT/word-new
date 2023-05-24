import WrongAccess from '@components/Ui/WrongAccess';
import type { NextPage } from 'next';
import React from 'react';

const NoAccess: NextPage = () => {
  return <WrongAccess />;
};

export default NoAccess;

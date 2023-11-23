import React from 'react';
import TelecomsBanner from '../../components/TelecomsBanner';
import Ninemobile from '../../components/Ninemobile';
import Deutsche from '../../components/Deutsche';
import Glo from '../../components/Glo';
import MtnNigeria from '../../components/MtnNigeria';

const Telecoms = () => {
  return (
    <div>
      <TelecomsBanner />
      <MtnNigeria />
      <Ninemobile />
      <Deutsche />
      <Glo />
    </div>
  );
};

export default Telecoms;

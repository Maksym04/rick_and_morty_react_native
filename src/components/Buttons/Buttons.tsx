import React from 'react';
import {ButtonsProps} from '../../types/types';
import FirstPageButton from './FirstPageButton';
import NextPageButton from './NextPageButton';
import PreviousPageButton from './PreviousPageButton';

const Buttons: React.FC<ButtonsProps> = ({
  showValueNextPage,
  showValuePrevPage,
  setFirstPage,
  setPrevPage,
  setNextPage,
  page,
  totalPage,
}) => {
  return (
    <>
      {page === 1 ? null : <FirstPageButton setFirstPage={setFirstPage} />}
      {page === totalPage ? null : (
        <NextPageButton
          showValueNextPage={showValueNextPage}
          setNextPage={setNextPage}
        />
      )}
      {page === 1 ? null : (
        <PreviousPageButton
          showValuePrevPage={showValuePrevPage}
          setPrevPage={setPrevPage}
        />
      )}
    </>
  );
};

export default Buttons;

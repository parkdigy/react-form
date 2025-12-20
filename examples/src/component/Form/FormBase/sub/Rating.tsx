import React from 'react';
import { PFormRating, PFormCol, PFormRow } from '../../../../../../src';
import { getName } from '@common';

const Rating = () => {
  return (
    <PFormRow>
      <PFormCol>
        <PFormRating name={getName('PFormRating', true)} label='PFormRating' />
      </PFormCol>
      <PFormCol>
        <PFormRating name={getName('PFormRating')} label='PFormRating' />
        <PFormRating name={getName('PFormRating')} label='PFormRating' />
      </PFormCol>
      <PFormCol label='PFormRating'>
        <PFormRating name={getName('PFormRating')} />
        <PFormRating name={getName('PFormRating')} />
      </PFormCol>
    </PFormRow>
  );
};

export default Rating;

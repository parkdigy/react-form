import React from 'react';
import { FormRating, FormCol, FormRow } from '@pdg/react-form';

const Rating = () => {
  return (
    <FormRow>
      <FormCol>
        <FormRating name={getName('FormRating', true)} label='FormRating' />
      </FormCol>
      <FormCol>
        <FormRating name={getName('FormRating')} label='FormRating' />
        <FormRating name={getName('FormRating')} label='FormRating' />
      </FormCol>
      <FormCol label='FormRating'>
        <FormRating name={getName('FormRating')} />
        <FormRating name={getName('FormRating')} />
      </FormCol>
    </FormRow>
  );
};

export default Rating;

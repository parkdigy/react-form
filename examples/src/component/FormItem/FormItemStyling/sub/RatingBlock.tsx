import React from 'react';
import { FormBlock, FormCol, FormRating, FormRow, FormRatingProps } from '../../../../../../src';

const RatingBlock: React.FC<{
  componentProps?: FormRatingProps;
}> = ({ componentProps }) => {
  return (
    <FormBlock label='Rating' line>
      <FormRow>
        <FormCol>
          <FormRating {...componentProps} name='FormRating_max_10' max={10} helperText='max=10' />
        </FormCol>
        <FormCol>
          <FormRating
            {...componentProps}
            name='FormRating_icon'
            icon='Favorite'
            emptyIcon='FavoriteBorder'
            helperText='icon / emptyIcon'
          />
        </FormCol>
        <FormCol>
          <FormRating
            {...componentProps}
            name='FormRating_highlightSelectedOnly'
            highlightSelectedOnly
            helperText='highlightSelectedOnly=true'
          />
        </FormCol>
      </FormRow>
    </FormBlock>
  );
};

export default RatingBlock;

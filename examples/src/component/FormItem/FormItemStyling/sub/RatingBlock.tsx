import React from 'react';
import { PFormBlock, PFormCol, PFormRating, PFormRow, PFormRatingProps } from '../../../../../../src';

const RatingBlock: React.FC<{
  componentProps?: PFormRatingProps;
}> = ({ componentProps }) => {
  return (
    <PFormBlock label='Rating' line>
      <PFormRow>
        <PFormCol>
          <PFormRating {...componentProps} name='FormRating_max_10' max={10} helperText='max=10' />
        </PFormCol>
        <PFormCol>
          <PFormRating
            {...componentProps}
            name='FormRating_icon'
            icon='Favorite'
            emptyIcon='FavoriteBorder'
            helperText='icon / emptyIcon'
          />
        </PFormCol>
        <PFormCol>
          <PFormRating
            {...componentProps}
            name='FormRating_highlightSelectedOnly'
            highlightSelectedOnly
            helperText='highlightSelectedOnly=true'
          />
        </PFormCol>
      </PFormRow>
    </PFormBlock>
  );
};

export default RatingBlock;

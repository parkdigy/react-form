import React, { useCallback, useRef } from 'react';
import {
  FormText,
  Search as _Search,
  SearchGroup,
  SearchButton,
  FormIcon,
  FormSelect,
  FormToggleButtonGroup,
  FormValueMap,
  FormToggleButtonGroupItem,
  FormDateTimePicker,
  FormDatePicker,
  FormDateRangePicker,
  SearchCommands,
} from '@pdg/react-form';
import { FormHelperText, Grid } from '@mui/material';
import dayjs from 'dayjs';

const Search = () => {
  const searchRef = useRef<SearchCommands>(null);

  const handleSubmit = (data: FormValueMap) => {
    ll('handleSubmit', data);
  };

  const handleToggleButtonGroupLoadItems = useCallback(() => {
    return new Promise<FormToggleButtonGroupItem[]>((resolve) => {
      setTimeout(() => {
        resolve([lv('전체', ''), lv('1', 1), lv('2', 2), lv('3', 3)]);
      }, 3000);
    });
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  const leftSearchGroup = (
    <SearchGroup max>
      <FormText name='FormText' label='검색어' />
      <FormSelect
        name='FormSelect'
        label='검색옵션'
        items={[
          lv('전체', ''),
          lv('Item 1', 1),
          lv('Item 2', 2),
          lv('Item 3', 3, { disabled: true }),
          lv('Item 4', 4),
          lv('Item 5', 5),
        ]}
      />
      <FormDatePicker name='FormDatePicker' readOnlyInput disablePast />
      <FormDateTimePicker name='FormDateTimePicker' time='minute' disablePast maxDate={dayjs().add(1, 'day')} />
      <FormDateRangePicker name='search_date' readOnlyInput minDate={dayjs().subtract(20, 'day')} />
      <FormToggleButtonGroup
        name='FormToggleButtonGroup'
        value=''
        notAllowEmptyValue
        onLoadItems={handleToggleButtonGroupLoadItems}
      />
    </SearchGroup>
  );

  return (
    <Grid container direction='column' spacing={2}>
      {/*<Grid item>*/}
      {/*  <_Search onSubmit={handleSubmit}>*/}
      {/*    {leftSearchGroup}*/}
      {/*    <SearchGroup align='right'>*/}
      {/*      <SearchButton>*/}
      {/*        <FormIcon>download</FormIcon>*/}
      {/*      </SearchButton>*/}
      {/*      <SearchButton type='submit' startIcon='search'>*/}
      {/*        조회*/}
      {/*      </SearchButton>*/}
      {/*    </SearchGroup>*/}
      {/*  </_Search>*/}
      {/*  <FormHelperText sx={{ ml: 1 }}>기본</FormHelperText>*/}
      {/*</Grid>*/}
      <Grid item>
        <_Search ref={searchRef} autoSubmit onSubmit={handleSubmit}>
          {leftSearchGroup}
          <SearchGroup align='right'>
            <SearchButton>
              <FormIcon>download</FormIcon>
            </SearchButton>
            <SearchButton
              icon='add'
              variant='contained'
              onClick={() => {
                ll(searchRef.current?.getItem('search_date_from'));
              }}
            >
              새 항목
            </SearchButton>
          </SearchGroup>
        </_Search>
        <FormHelperText sx={{ ml: 1 }}>autoSubmit=true</FormHelperText>
      </Grid>
    </Grid>
  );
};

export default Search;

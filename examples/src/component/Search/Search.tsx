import React, { useCallback, useRef } from 'react';
import {
  FormText,
  Search as _Search,
  SearchGroupRow,
  SearchGroup,
  SearchButton,
  SearchMenuButton,
  FormSelect,
  FormToggleButtonGroup,
  FormValueMap,
  FormDateTimePicker,
  FormDatePicker,
  FormDateRangePicker,
  SearchCommands,
  FormToggleButtonGroupItems,
} from '../../../../src';
import { FormHelperText, Grid, MenuItem, MenuList } from '@mui/material';
import dayjs from 'dayjs';
import { lv } from '@pdg/data';

const Search = () => {
  const searchRef = useRef<SearchCommands>(null);

  const handleSubmit = (data: FormValueMap) => {
    ll('handleSubmit', data);
  };

  const handleToggleButtonGroupLoadItems = useCallback(() => {
    return new Promise<FormToggleButtonGroupItems<'' | number>>((resolve) => {
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
      <FormDatePicker name='FormDatePicker' disablePast />
      <FormDateTimePicker name='FormDateTimePicker' time='minute' disablePast maxDate={dayjs().add(1, 'day')} />
      <FormDateRangePicker name='search_date' minDate={dayjs().subtract(20, 'day')} />
      <FormToggleButtonGroup
        name='FormToggleButtonGroup'
        label='옵션'
        value=''
        notAllowEmptyValue
        onLoadItems={handleToggleButtonGroupLoadItems}
      />
    </SearchGroup>
  );

  return (
    <Grid container direction='column' spacing={2}>
      <Grid>
        <_Search ref={searchRef} autoSubmit onSubmit={handleSubmit}>
          {leftSearchGroup}

          <SearchGroup align='right'>
            <SearchButton startIcon='download' />
            <SearchButton
              startIcon='add'
              startIconMarginLeft={-5}
              variant='contained'
              onClick={() => {
                ll(searchRef.current?.getItem('search_date_from'));
              }}
            >
              새 항목
            </SearchButton>
            <SearchMenuButton
              startIcon='menu'
              variant='contained'
              placement='bottom-right'
              menuList={
                <MenuList>
                  <MenuItem onClick={() => ll('Menu 1 Click')}>Menu 1</MenuItem>
                  <MenuItem onClick={() => ll('Menu 2 Click')}>Menu 2</MenuItem>
                </MenuList>
              }
            >
              메뉴 버튼
            </SearchMenuButton>
          </SearchGroup>

          <SearchGroupRow>
            <SearchGroup>
              <FormText name='keyword2' label='검색어 2' />
            </SearchGroup>
          </SearchGroupRow>
        </_Search>
        <FormHelperText sx={{ ml: 1 }}>autoSubmit=true</FormHelperText>
      </Grid>
    </Grid>
  );
};

export default Search;

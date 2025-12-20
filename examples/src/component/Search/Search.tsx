import React, { useCallback, useRef } from 'react';
import {
  PFormText,
  PSearch as _Search,
  PSearchGroupRow,
  PSearchGroup,
  PSearchButton,
  PSearchMenuButton,
  PFormSelect,
  PFormToggleButtonGroup,
  PFormValueMap,
  PFormDateTimePicker,
  PFormDatePicker,
  PFormDateRangePicker,
  PSearchCommands,
  PFormToggleButtonGroupItems,
} from '../../../../src';
import { FormHelperText, Grid, MenuItem, MenuList } from '@mui/material';
import dayjs from 'dayjs';
import { lv } from '@pdg/data';

const Search = () => {
  const searchRef = useRef<PSearchCommands>(null);

  const handleSubmit = (data: PFormValueMap) => {
    ll('handleSubmit', data);
  };

  const handleToggleButtonGroupLoadItems = useCallback(() => {
    return new Promise<PFormToggleButtonGroupItems<'' | number>>((resolve) => {
      setTimeout(() => {
        resolve([lv('전체', ''), lv('1', 1), lv('2', 2), lv('3', 3)]);
      }, 3000);
    });
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  const leftSearchGroup = (
    <PSearchGroup max>
      <PFormText name='PFormText' label='검색어' />
      <PFormSelect
        name='PFormSelect'
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
      <PFormDatePicker name='PFormDatePicker' disablePast />
      <PFormDateTimePicker name='PFormDateTimePicker' time='minute' disablePast maxDate={dayjs().add(1, 'day')} />
      <PFormDateRangePicker name='search_date' minDate={dayjs().subtract(20, 'day')} />
      <PFormToggleButtonGroup
        name='PFormToggleButtonGroup'
        label='옵션'
        value=''
        notAllowEmptyValue
        onLoadItems={handleToggleButtonGroupLoadItems}
      />
    </PSearchGroup>
  );

  return (
    <Grid container direction='column' spacing={2}>
      <Grid>
        <_Search ref={searchRef} autoSubmit onSubmit={handleSubmit}>
          {leftSearchGroup}

          <PSearchGroup align='right'>
            <>
              <PSearchButton startIcon='download' />
              <PSearchButton startIcon='download' />
            </>
            <PSearchButton
              startIcon='add'
              startIconMarginLeft={-5}
              variant='contained'
              onClick={() => {
                ll('click');
              }}
            >
              새 항목
            </PSearchButton>
            <PSearchMenuButton
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
            </PSearchMenuButton>
          </PSearchGroup>

          <PSearchGroupRow>
            <PSearchGroup>
              <PFormText name='keyword2' label='검색어 2' />
            </PSearchGroup>
          </PSearchGroupRow>
        </_Search>
        <FormHelperText sx={{ ml: 1 }}>autoSubmit=true</FormHelperText>
      </Grid>
    </Grid>
  );
};

export default Search;

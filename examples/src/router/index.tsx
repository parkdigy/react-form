import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Home,
  FormBase,
  FormItemStyling,
  FormItemText,
  FormItemNumber,
  FormItemTag,
  FormItemSelect,
  FormItemTextarea,
  FormItemCheckbox,
  FormItemRadioGroup,
  FormItemToggleButtonGroup,
  FormItemRating,
  FormItemTextEditor,
  FormItemAutocomplete,
  FormItemFile,
  FormItemDate,
  Search,
} from '#comp';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<FormBase />} />
      <Route path='/form_item/styling' element={<FormItemStyling />} />
      <Route path='/form_item/text' element={<FormItemText />} />
      <Route path='/form_item/number' element={<FormItemNumber />} />
      <Route path='/form_item/tag' element={<FormItemTag />} />
      <Route path='/form_item/select' element={<FormItemSelect />} />
      <Route path='/form_item/autocomplete' element={<FormItemAutocomplete />} />
      <Route path='/form_item/textarea' element={<FormItemTextarea />} />
      <Route path='/form_item/checkbox' element={<FormItemCheckbox />} />
      <Route path='/form_item/radio' element={<FormItemRadioGroup />} />
      <Route path='/form_item/toggle_button' element={<FormItemToggleButtonGroup />} />
      <Route path='/form_item/rating' element={<FormItemRating />} />
      <Route path='/form_item/text_editor' element={<FormItemTextEditor />} />
      <Route path='/form_item/file' element={<FormItemFile />} />
      <Route path='/form_item/date' element={<FormItemDate />} />
      <Route path='/search' element={<Search />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;

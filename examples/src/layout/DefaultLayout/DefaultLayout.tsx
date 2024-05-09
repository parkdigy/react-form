import React from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import menu from './menu.json';
import { theme } from './DefaultLayout.types';
import MainRouter from '../../router';

const FINAL_MENU = menu.map((info) => ({
  ...info,
  uri: !info.uri ? info.uri : env === 'development' ? info.uri : `/react-form${info.uri}`,
  items: info.items?.map((info) => ({
    ...info,
    uri: !info.uri ? info.uri : env === 'development' ? info.uri : `/react-form${info.uri}`,
  })),
}));

const DefaultLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AdminLayout.DefaultLayout logo='@pdg/react-form' menu={FINAL_MENU}>
        <MainRouter />
      </AdminLayout.DefaultLayout>
    </ThemeProvider>
  );
};

export default DefaultLayout;

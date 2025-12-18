import React from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Menu from './menu.json';
import { theme } from './DefaultLayout.types';
import MainRouter from '../../router';

const menu = Menu.map((info) => ({
  ...info,
  uri: !info.uri ? info.uri : env.isProduction ? `/${env.name}${info.uri}` : info.uri,
  items: info.items?.map((subInfo) => ({
    ...subInfo,
    uri: !subInfo.uri ? subInfo.uri : env.isProduction ? `/${env.name}${subInfo.uri}` : subInfo.uri,
  })),
}));

const DefaultLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminLayout.DefaultLayout logo='react-hook' menu={menu}>
        <MainRouter />
      </AdminLayout.DefaultLayout>
    </ThemeProvider>
  );
};

export default DefaultLayout;

import React from 'react';
// import { render } from "../../__test-utils__/utils";
import { render } from "@testing-library/react";
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter } from "react-router-dom";
import {useSettings} from "../../features/settings/useSettings"
import { createBrowserHistory , createMemoryHistory } from "history";
import { useAuth } from "../../features/login/useAuth";
import { Router } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../../features/login/userSlice";
import { Provider } from "react-redux";
jest.mock('../../features/settings/useSettings');

const dealership = {
  name: "Test Sddemo",
  nameKey: "sd-demo-dealership",
  displayName: "Another Dealership - Kansas",
  state: "Test Kansas",
  city: "Wichita",
  zipcode: "S900320",
  isActive: true,
  email: "nklutse@simple-dealer.com",
  phoneNumber: "2332020890",
  streetNumber: 65,
  streetName: "Kaukau",
  contactName: "Nelson Klutse",
}

const page = 'DEALERSHIP_SETTINGS'
const path = '/settings/dealership'

jest.mock('@simple_merchant/sd-formatter', () => ({
  currencyOptions: { currency: { USD: 'USD' } },
  numberFormatOptions: { PHONE: 'PHONE', SSN: 'SSN' },
  currency: jest.fn().mockReturnValue('')
}))

jest.mock('@simple-dealer/autofill-puppeteer-client', () => ({
  createDownloadAutofillDaemon:  jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: path,
  }),

  useHistory: () => ({
    push: jest.fn(),
  })
}));

const store = configureStore({ reducer: { user: userSlice.reducer, }, preloadedState: {} })
const Wrapper = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

describe('Should allow only authenticated users to view protected routes', () => {

  beforeEach(() => {
    useSettings.mockReturnValue({
      state: {
        dealershipsSet: [],
        currentDealership: dealership,
      },
    });
  });
  jest.mock('../../features/login/useAuth', ()=>({
    useAuth: jest.fn().mockReturnValue(
      {
        state:{
          sdAuthenticated: true
        }
      }
    )
  }));

  afterEach(jest.clearAllMocks)

  test('should return dealership page if User is Authorized', () => {

    const history = createMemoryHistory()
    history.push(page)
    render(
      <Wrapper children={
        <Router history={history}>
          <ProtectedRoute page={page} />
        </Router>
      } />
    )
  });
});

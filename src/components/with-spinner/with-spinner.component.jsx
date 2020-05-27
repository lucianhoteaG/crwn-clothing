import React from 'react';

import './with-spinner.styles.jsx';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles.jsx';



const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  )
};

export default WithSpinner;
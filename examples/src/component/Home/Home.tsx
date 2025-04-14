import React, { useCallback, useEffect, useState } from 'react';
import { FormNumber } from '../../../../src';

const Home = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    ll('setValue');
    setValue(16);
  }, []);

  const handleChange = useCallback((newValue: number) => {
    // ll('handleChange', newValue);
    setValue(newValue);
  }, []);

  useEffect(() => {
    ll('current value', value);
  }, [value]);

  return (
    <div>
      <FormNumber name='test' value={value} onChange={handleChange} />
    </div>
  );
};

export default Home;

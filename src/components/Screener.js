import React, { useState } from 'react';
import RSI from './Screener Forms/RSI';
import EMAMA from './Screener Forms/EMAMA';
import AVWAPResistance from './Screener Forms/AVWAPResistance';
import MarketCap from './Screener Forms/MarketCap';

const Screener = () => {
  const [formInstances, setFormInstances] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [indicator, setIndicator] = useState({
    indicator: '',
    period: 1,
    timeframe: 'Day',
    operator: {
      type: '',
    },
    upperBound: null,
    lowerBound: null,
  });

  const fetchData = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setData('hi')
    }, 2000)
  }


  const handleIndicatorChange = (e) => {
    setIndicator({ ...indicator, indicator: e.target.value });
  };


  const addFormToData = () => {
    if (indicator.indicator === '' || indicator.period === '') {
      alert('Please fill in all required fields.');
      return;
    }
    const formData = { ...indicator };
    setFormInstances(prevFormInstances => {
      const updatedFormInstances = [...prevFormInstances, formData];
      return updatedFormInstances;
    });
    resetForm();
  };

  const resetForm = () => {
    setIndicator({
      indicator: '',
      period: '',
      timeframe: 'Day',
      operator: {
        type: '',
      },
      upperBound: null,
      lowerBound: null,
    });
  };

  const handleSubmit = () => {
    addFormToData();
    fetchData();
    console.log(formInstances)
  };

  return (
    <div>
      <h2>Screener</h2>
      <div>
        <label htmlFor="indicator">Indicator:</label>
        <select id="indicator" value={indicator.indicator} onChange={handleIndicatorChange}>
          <option value="">Select Indicator</option>
          <option value="RSI">RSI</option>
          <option value="EMA">EMA</option>
          <option value="MA">MA</option>
          <option value="AVWAPResistance">AVWAPResistance</option>
          <option value="MarketCap">MarketCap</option>
          <option value="52WeekHigh">52WeekHigh</option>
        </select>

        {indicator.indicator === 'RSI' && <RSI indicator={indicator} setIndicator={setIndicator} />}
        {indicator.indicator === 'EMA' && <EMAMA indicator={indicator} setIndicator={setIndicator} />}
        {indicator.indicator === 'MA' && <EMAMA indicator={indicator} setIndicator={setIndicator} />}
        {indicator.indicator === 'AVWAPResistance' && <AVWAPResistance indicator={indicator} setIndicator={setIndicator} />}
        {indicator.indicator === 'MarketCap' && <MarketCap indicator={indicator} setIndicator={setIndicator} />}
      </div>

      <button onClick={addFormToData}>
        Add Another
      </button>
      <button onClick={handleSubmit}>
        Submit
      </button>

      {/* Displaying form data as JSON objects */}
      {formInstances.map((formData, index) => (
        <p key={index}>{JSON.stringify(formData)}</p>
      ))}

      {loading && <h1>Loading...</h1>}
      {data && <h1>Stocks</h1>}
    </div>
  );
};

export default Screener;

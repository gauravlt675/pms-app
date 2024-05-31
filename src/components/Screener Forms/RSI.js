import React from 'react'
import LowerBound from './Bounds/LowerBound'
import UpperBound from './Bounds/UpperBound'

const RSI = ({ indicator, setIndicator }) => {
  const handleOperatorChange = (e) => {
    let selectedOperator = e.target.value
    setIndicator({
      ...indicator,
      operator: { type: selectedOperator },
      lowerBound: selectedOperator === 'Above' || selectedOperator === 'Cross above' || selectedOperator === 'Between' ? true : false,
      upperBound: selectedOperator === 'Below' || selectedOperator === 'Cross below' || selectedOperator === 'Between' ? true : false
    })
  }

  return (
    <div>
      <label htmlFor="period">Period:</label>
      <input
        type="text"
        id="period"
        name="period"
        value={14}
        readOnly // Period is fixed value
      />
      <label htmlFor="timeframe">Timeframe:</label>
      <input
        type="text"
        id="timeframe"
        name="timeframe"
        value="Day"
        readOnly // Timeframe is fixed value
      />
      <label htmlFor="operator">Operator:</label>
      <select
        id="operator"
        name="operator"
        value={indicator.operator.type}
        onChange={handleOperatorChange}
      >
        <option value="">Select Operator</option>
        <option value="Above">Above</option>
        <option value="Below">Below</option>
        <option value="Cross above">Cross above</option>
        <option value="Cross below">Cross below</option>
        <option value="Between">Between</option>
      </select>
      {indicator.lowerBound && <LowerBound />}
      {indicator.upperBound && <UpperBound />}
    </div>
  )
}

export default RSI

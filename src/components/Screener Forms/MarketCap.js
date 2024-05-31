import React from 'react'
import LowerBound from './Bounds/LowerBound'
import UpperBound from './Bounds/UpperBound'

const MarketCap = ({indicator, setIndicator}) => {
  const handleOperatorChange = (e) => {
      let selectedOperator = e.target.value
      setIndicator({...indicator, 
        operator: { type: selectedOperator },
          lowerBound: selectedOperator === 'Above' || selectedOperator === 'Between'? true : false, 
          upperBound: selectedOperator === 'Below' || selectedOperator === 'Between'? true : false
      })
  }

  return (
    <div>
      <label htmlFor="operator">operator:</label>
      <select
        id="operator"
        name="operator"
        value={indicator.operator.type}
        onChange={handleOperatorChange}
      >
        <option value="">Select Operator</option>
        <option value="Above">Above</option>
        <option value="Below">Below</option>
        <option value="Between">Between</option>
      </select>
      {indicator.lowerBound && <LowerBound />}
      {indicator.upperBound && <UpperBound />}
    </div>
  )
}

export default MarketCap

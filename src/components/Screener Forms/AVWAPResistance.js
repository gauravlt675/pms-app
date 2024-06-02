import React from 'react'
import LowerBound from './Bounds/LowerBound'
import UpperBound from './Bounds/UpperBound'

const AVWAPResistance = ({ indicator, setIndicator }) => {
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
                type="number" // Use type="number" for numerical input
                id="period"
                name="period"
                value={1}
                min="1" // Minimum value
                max="500" // Maximum value
            />
            <label htmlFor="timeframe">Timeframe:</label>
            <input
                type="text"
                id="timeframe"
                name="timeframe"
                value="Day"
                readOnly // Timeframe is fixed value 'Day"
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
            {indicator.lowerBound != null && <LowerBound indicator={indicator} setIndicator={setIndicator} />}
            {indicator.upperBound != null && <UpperBound indicator={indicator} setIndicator={setIndicator} />}
        </div>
    )
}

export default AVWAPResistance

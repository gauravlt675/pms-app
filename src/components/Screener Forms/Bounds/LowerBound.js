import React from 'react'

const LowerBound = ({ indicator, setIndicator }) => {
  return (
    <div>
      <label htmlFor="lowerBound">Lower Bound</label>
      <input
        type="number"
        id="lowerbd"
        value={indicator.lowerBound == null ? 0 : indicator.lowerBound}
        name="lowerBound"
        onChange={(e) => { setIndicator({ ...indicator, lowerBound: e.target.value })}}
      />
    </div>
  )
}

export default LowerBound

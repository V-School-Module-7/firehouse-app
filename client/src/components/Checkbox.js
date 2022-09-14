import React from "react"

export default function Checkbox({index, isChecked, checkHandler, label}) {

    // console.log({ isChecked })
    
    return (
      <div>
        <input
          type="checkbox"
          id={`checkbox-${index}`}
          checked={isChecked}
          onChange={checkHandler}
        />
        <label htmlFor={`checkbox-${index}`}>{label}</label>
      </div>
    )
}
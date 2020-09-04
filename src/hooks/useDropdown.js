import React, {useState} from "react"

const useDropdown = (label, name, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const Dropdownmaker = () => (
      <label htmlFor={name}>
        {label}
          <select
          id={name}
          name={name}
          value={state}
          onChange={e=>setState(e.target.value)}
          onBlur={e=>setState(e.target.value)}
          disabled={!options.length}
            >
            <option>All</option>
            {options.map(item=>
            <option key={item} value={item}>{item}</option>)}
          </select>
    </label>
    );
    return [state, Dropdownmaker, setState]
    }

    export default useDropdown
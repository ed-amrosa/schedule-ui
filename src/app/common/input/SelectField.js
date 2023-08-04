const SelectField = ({value, onSelect, options, label}) => {
    return  <div className="input-container">
        <label className="input-label">{label}</label>
        <select value={value} onChange={onSelect}>
            {
                options.map((option, index) => <option key={`select-field-${label}-${index}`} value={option.value}>{option.name}</option>)
            }
        </select>
    </div>
}

export default SelectField;
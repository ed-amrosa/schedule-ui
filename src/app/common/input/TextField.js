const TextField = ({label, value, onChange}) => {
    
    return  <div className="input-container">
        <label className="input-label">{label}</label>
        <input type="text" value={value} onChange={onChange}></input>
    </div>
}

export default TextField;
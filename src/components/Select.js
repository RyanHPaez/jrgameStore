function Select(props) {

    const {value, setFilterSelected, optionsArray} = props;

    const mappedOptions = optionsArray.map((motoType,i) => {
        return <option value={motoType} key={i}>
            {motoType.toUpperCase()}
        </option>
    })

    return (
        <select value={value} onChange={(e) => setFilterSelected(e.target.value)}>
            {mappedOptions}
        </select>
    )
}

export default Select
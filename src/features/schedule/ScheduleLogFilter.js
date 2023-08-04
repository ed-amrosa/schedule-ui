import { useDispatch, useSelector } from "react-redux";
import SelectField from "../../app/common/input/SelectField";
import TextField from "../../app/common/input/TextField";
import { setFilterValue, setFilterType } from "../redux-tk/slices/schedulesSlice";
import { filterOptions } from "../../app/constants/filterOptions";
const ScheduleLogFilter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector((state) => state.schedules.filterValue);
    const filterType = useSelector((state) => state.schedules.filterType);

    const onFilterValueChange = (e) => {
        dispatch(setFilterValue(e.target.value))
    };

    const onFilterTypeSelect = (e) => {
        dispatch(setFilterType(e.target.value));
    }

    return <div style={{display: 'flex' ,height: '10%', margin: '0 8px'}}>
        <TextField value={filterValue} onChange={onFilterValueChange} label='Search:'/>
        <SelectField value={filterType} onSelect={onFilterTypeSelect} label='Filter by:' options={filterOptions}/>
    </div>
}

export default ScheduleLogFilter;
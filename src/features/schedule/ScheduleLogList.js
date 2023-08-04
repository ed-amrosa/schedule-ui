import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../../app/common/card/Card";
import { fetchScheduleLogs } from "../redux-tk/slices/schedulesSlice";
import Loading from "../../app/common/loading/Loading";
import { useDebouncedCallback } from "use-debounce";

const ScheduleLogList = () => {
    const dispatch = useDispatch();
    const scheduleLogList = useSelector((state) => state.schedules.scheduleLogList);
    const filterType = useSelector((state) => state.schedules.filterType);
    const filterValue = useSelector((state) => state.schedules.filterValue);
    const selectedSchedule = useSelector((state) => state.schedules.selectedSchedule);
    const loading = useSelector((state) => state.schedules.scheduleLogListLoading);

    // Delays the fetch call to avoid flooding the api with requests everytime we change the filterValue, selectedSchedule or filterType
    const debouncedFetchScheduleLogs = useDebouncedCallback((params) => {
        dispatch(fetchScheduleLogs(params))
    }, 250);

    useEffect(() => {
        const idParam = selectedSchedule ? {scheduleId: selectedSchedule} : {};
        const filterParam = filterValue && filterType !== 'all' ? {[filterType]: filterValue} : {};
        const params = {...idParam, ...filterParam};
        
        debouncedFetchScheduleLogs(params);
    }, [selectedSchedule, filterValue, filterType, debouncedFetchScheduleLogs]);

    if(loading) return <Loading/>;

    if(scheduleLogList.length > 0) {

        return <div className="schedule-log-list-container schedule-log-list-grid">
            {
                scheduleLogList.length > 0 && scheduleLogList.map(log => {
                    const body = <>
                        <p>Server: {log.serverName}</p>
                        <p>Status: {log.status}</p>
                    </>

                    const footer = <>
                        <div style={{padding: "8px 14px" ,fontSize: "10px", width: "100%", height:"100%"}}>{new Date(log.startTime).toDateString()} - {new Date(log.endTime).toDateString()}</div>
                    </>

                    return <Card
                        key={`schedule-log-${log.id}`}
                        title={`Log: #${log.id}`}
                        body={body}
                        footer={footer}
                        iconSrc={'log.png'}
                    />  
                })
            }
        </div>
    }

    return <p style={{marginLeft: '8px'}}>No entries found.</p>
}

export default ScheduleLogList;
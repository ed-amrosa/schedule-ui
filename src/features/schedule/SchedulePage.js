import ScheduleList from "./ScheduleList";
import ScheduleLogList from "./ScheduleLogList";
import ScheduleLogFilter from "./ScheduleLogFilter";

const SchedulePage = () => {
    return <div className="body flex">
        <div className="app-left">
            <ScheduleList/>
        </div>
        <div className="app-right">
            <ScheduleLogFilter/>
            <ScheduleLogList/>    
        </div>
    </div>
}

export default SchedulePage;
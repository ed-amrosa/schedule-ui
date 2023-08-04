import { useEffect } from "react";
import Card from "../../app/common/card/Card";
import List from "../../app/common/list/List";
import { useSelector, useDispatch } from "react-redux";
import { fetchSchedules, setSelectedSchedule, updateSchedule } from "../redux-tk/slices/schedulesSlice";
import Loading from "../../app/common/loading/Loading";

const ScheduleList = () => {
    const dispatch = useDispatch();
    const scheduleList = useSelector((state) => state.schedules.scheduleList);
    const selectedSchedule = useSelector((state) => state.schedules.selectedSchedule);
    const loading = useSelector((state) => state.schedules.scheduleListLoading);

    useEffect(() => {
        dispatch(fetchSchedules());
    }, [dispatch]);

    const onSelect = (e, id) => {
        dispatch(setSelectedSchedule(id));
    }

    const onRetire = (e, id) => {
        e.stopPropagation();

        const schedule = scheduleList.find(schedule => schedule.id === id);
        dispatch(updateSchedule({...schedule, isRetired: !schedule.isRetired}));
    }

    if(loading) return <List><Loading/></List>;

    return <List>
        {
            scheduleList.map(schedule => {
                const startDate = new Date(schedule.startDate).toDateString();
                const endDate = new Date(schedule.endDate).toDateString();
                const endPoint = new Date(schedule.endPoint).toDateString();
                const startPoint = new Date(schedule.startPoint).toDateString();

                const body = <>
                    <span>description: {schedule.description}</span>
                    <p>{startDate} - {endDate}</p>
                    <p>{startPoint} - {endPoint}</p>
                </>

                const footer = <button 
                    className="retire-button"
                    onClick={(e) => onRetire(e, schedule.id)}    
                >
                    {schedule.isRetired ? "Unretire" : "Retire"}
                </button>
                return <div key={`schedule-card-${schedule.id}div`} onClick={(e) => onSelect(e, schedule.id)}>
                    <Card 
                        key={`schedule-card-${schedule.id}`}
                        title={schedule.name}
                        footer={footer}
                        iconSrc="event.png"
                        body={body}
                        id={schedule.id}
                        backgroundColor={selectedSchedule === schedule.id && '#00b09b'}
                    />    
                </div>
            })
        }
    </List>
}

export default ScheduleList;
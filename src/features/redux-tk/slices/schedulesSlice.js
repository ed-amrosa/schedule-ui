import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agent from "../../../app/api/agent";

export const fetchSchedules = createAsyncThunk(
    'schedules/fetchSchedules',
    async () => {
        const response = await agent.Schedules.list();
        return response;
    }
)

export const fetchScheduleLogs = createAsyncThunk(
    'scheduleLogs/fetchScheduleLogs',
    async (params) => {
        const response = await agent.ScheduleLogs.list({params: params});
        return response
    }
)

export const updateSchedule = createAsyncThunk(
    'schedules/updateSchedules',
    async (params, {dispatch}) => {
        await agent.Schedules.update(params);
        const response = await dispatch(fetchSchedules());
        return response;
    }
)

const initialState = {
  scheduleList: [],
  scheduleLogList: [],
  selectedSchedule: null,
  filterType: 'all',
  filterValue: '',
  scheduleListLoading: false,
  scheduleLogListLoading: false
};

const schedulesSlice = createSlice({
  name: "schedules",
  initialState,
  reducers: {
    setFilterType: (state, action) => {
        state.filterType = action.payload;
    },
    setFilterValue: (state, action) => {
        state.filterValue = action.payload;
    },
    setSelectedSchedule: (state, action) => {
        state.selectedSchedule = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSchedules.pending, (state, action) => {
        state.scheduleListLoading = true;
    })
    builder.addCase(fetchSchedules.fulfilled, (state, action) => {
        state.scheduleListLoading = false;
        state.scheduleList = action.payload;
    })
    builder.addCase(fetchSchedules.rejected, (state, action) => {
        state.scheduleListLoading = false;
        //To do: map error state
    })
    builder.addCase(fetchScheduleLogs.pending, (state, action) => {
        state.scheduleLogListLoading = true;
    })
    builder.addCase(fetchScheduleLogs.fulfilled, (state, action) => {
        state.scheduleLogList = action.payload;
        state.scheduleLogListLoading = false
    })
    builder.addCase(fetchScheduleLogs.rejected, (state, action) => {
        state.scheduleLogListLoading = false;
        //To do: map error state
    })
  }
});

export const { setFilterType, setFilterValue, setSelectedSchedule } = schedulesSlice.actions;

export default schedulesSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import schedulesSlice from "../slices/schedulesSlice";

const store = configureStore({
  reducer: {
    schedules: schedulesSlice,
  },
});

export default store;
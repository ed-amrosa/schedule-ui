import Header from './app/layout/header/Header';
import store from './features/redux-tk/store/store';
import { Provider } from 'react-redux';
import SchedulePage from './features/schedule/SchedulePage';

/*
As it is a simple application with only one path and page, 
this will do, however, if we want multiple routes and pages associated to them we can
always use react router dom.
*/

function ScheduleApp() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <Header />
        <SchedulePage />
      </div>
    </Provider>
  );
}

export default ScheduleApp;

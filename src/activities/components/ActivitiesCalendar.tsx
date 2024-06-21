import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Activity } from "../models/activity";

const localizer = dayjsLocalizer(dayjs);

interface Props {
  activities: Activity[];
  onActivityClick?: (activity: Activity) => void;
}

const ActivitiesCalendar = ({ activities, onActivityClick }: Props) => {
  return (
    <div>
      <Calendar
        className="w-full h-dvh px-0 md:px-10"
        localizer={localizer}
        events={activities}
        startAccessor="start"
        titleAccessor="title"
        endAccessor="end"
        style={{ height: 700 }}
        eventPropGetter={(event) => ({
          className: event.className,
        })}
        onSelectEvent={onActivityClick}
      />
    </div>
  );
};

export default ActivitiesCalendar;

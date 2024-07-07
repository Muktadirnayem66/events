
import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard";



const EventList = async ({query}) => {
  const allEvents = await  getAllEvents(query)
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {

        allEvents.map((events)=>(
          <EventCard key={events.id} events={events}/>
        ))

      }
    </div>
  );
};

export default EventList;

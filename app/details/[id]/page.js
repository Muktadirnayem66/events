import EventDetails from '@/components/details/EventDetails';
import EventVenu from '@/components/details/EventVenu';
import HeroSection from '@/components/details/HeroSection';
import { getEventById } from '@/db/queries';
import React from 'react';


export async function generateMetadata({params:{id}}){

   const event = await getEventById(id)
   return {
      title:`Eventry- ${event?.name}`,
      details:event?.details,
      openGraph:{
         images:[event?.imageUrl]
      }
   }

}
const EventDetailsPage = async ({params:{id}}) => {

    const eventInfo = await getEventById(id)
    return (
       <>
       <HeroSection eventInfo={eventInfo}/>
        <section className="container">
      <div className="grid grid-cols-5 gap-12 my-12">
           <EventDetails details={eventInfo?.details} swags={eventInfo?.swags}/>
           <EventVenu location={eventInfo?.location}/> 
        </div>
        </section>
       </>
    );
};

export default EventDetailsPage;
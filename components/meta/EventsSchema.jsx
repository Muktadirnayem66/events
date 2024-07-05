


const EventsSchema = ({event}) => {
    const eventName = encodeURIComponent(event?.name)
    const formattedData = {

        "@context": "https://schema.org",
      "@type": "Event",
      "name": eventName,
      "startDate": new Date(),
      "endDate": new Date(),
      "description":event?.description,
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": event?.location,
      },
      "image": [
        event?.imageUrl
       ],
       "organizer": {
        "@type": "Organization",
        "name": "portfolio",
        "url": "https://muktadirnayem66.github.io/portfolio1/"
      }
    }


    return (
        <>
        <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{__html: JSON.stringify(formattedData),

         }}/>
            
        </>
    );
};

export default EventsSchema;
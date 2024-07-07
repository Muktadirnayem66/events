

const EventsSchemaScript = ({event}) => {

    const eventName = encodeURIComponent(event?.name)
    const formattedData = {
        
            "@context": "https://schema.org",
            "@type": "Event",
            "name": eventName,
            "startDate": new Date(),
            "endDate": new Date(),
            "description": event?.details,
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
              "name": "NTech",
              "url": "https://NTech.com"
            }
          
    }

    return (
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(formattedData) }}/>
            
        </>
    );
};

export default EventsSchemaScript;
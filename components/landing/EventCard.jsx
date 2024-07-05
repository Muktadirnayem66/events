import Image from 'next/image';
import React from 'react';
import EventLogo from '@/public/assets/google-io-2023-1.png'
import Link from 'next/link';
import ActionButton from '../ActionButton';
import EventsSchema from '../meta/EventsSchema';


const EventCard = ({event}) => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
          <EventsSchema event={event}/>
          <Image src={event?.imageUrl} alt={event?.name} width={500} height={500} className="w-full" />

          <div className="p-3">
            <Link href={`/details/${event.id}`} className="font-bold text-lg">{event?.name}</Link>
            <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
            <div className="text-[#737373] text-sm mt-1">
              <span>{event?.interested_ids?.length} Interested</span>
              <span className='mx-1'>|</span>
              <span>{event?.going_ids?.length} Going</span>
            </div>
                <ActionButton eventId={event?.id} goingUserIds={event?.going_ids} interestedUserIds={event?.interested_ids}/>
          </div>
        </div>
    );
};

export default EventCard;
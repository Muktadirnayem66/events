import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";
import EventsSchemaScript from "../meta/EventsSchemaScript";

const EventCard = ({events}) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventsSchemaScript event={events}/>
      <Image
        src={events?.imageUrl}
        width={500}
        height={500}
        alt={events?.name}
        className="w-full"
      />

      <div className="p-3">
        <Link href={`/details/${events?.id}`} className="font-bold text-lg">
          {events?.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          {events?.location}
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{events?.interested_ids?.length} Interested</span>
          <span className="mx-1">|</span>
          <span>{events?.going_ids?.length} Going</span>
        </div>

        <ActionButton eventId={events?.id} interestedUserIds={events?.interested_ids} goingUserIds={events?.going_ids} />
      </div>
    </div>
  );
};

export default EventCard;

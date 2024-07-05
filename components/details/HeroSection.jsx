import Image from 'next/image';
import React from 'react';
import EventLogo from '@/public/assets/google-io-2023-1.png'
import ActionButton from '../ActionButton';
import { getBlurData } from '@/utils/blur-generator';

const HeroSection = async ({eventInfo}) => {
  const {base64 } = await getBlurData(eventInfo?.imageUrl)
    return (
        <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image src={eventInfo?.imageUrl} alt="Event 1" width={900} height={900} className="h-[450px] mx-auto" placeholder='blur' blurDataURL={base64} />
      </div>

     
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventInfo?.interested_ids?.length} Interested</span>
            <span>|</span>
            <span>{eventInfo?.going_ids?.length} Going</span>
          </div>
        </div>

        <ActionButton eventId={eventInfo?.id} goingUserIds={eventInfo?.going_ids} interestedUserIds={eventInfo?.interested_ids} formDetails={true}/>
      </div>
    </section>
    );
};

export default HeroSection;
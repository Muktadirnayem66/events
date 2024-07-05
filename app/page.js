import Eventlist from '@/components/landing/Eventlist';
import Header from '@/components/landing/Header';
import Loading from '@/components/Loading';
import React, { Suspense } from 'react';

const Home = ({searchParams: {query}}) => {
  return (
    <section className='container'>
      <Header/>
      <Suspense key={query} fallback={<Loading/>}>
      <Eventlist query={query}/>
      </Suspense>
    </section>
  );
};

export default Home;
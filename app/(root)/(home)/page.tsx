import SearchForm from '@/components/SearchForm';
import Filters from '@/components/ui/Filters';
import { getResources } from '@/sanity/actions';
import React from 'react';

const Page = async () => {
  const resources = await getResources({ query: '', category: '', page: '1' });

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-x1 bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>JavaScript Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>
      
      <Filters />
    </main>
  );
};

export default Page;
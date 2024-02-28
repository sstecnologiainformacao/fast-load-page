import ResourcesCard from '@/components/ResourcesCard';
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

      <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        Header
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          {resources.length > 0 ? (
            resources.map((resource: any) => (
              <ResourcesCard
                key={resource._id}
                id={resource._id}
                title={resource.title}
                image={resource.image}
                downloadNumber={resource.views}
              />
            ))
          ) : (
            <p className='body-regular text-white-400'>No resources found</p>
          )
        }
        </div>
      </section>      
    </main>
  );
};

export default Page;
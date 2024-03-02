import Header from '@/components/Header';
import ResourcesCard from '@/components/ResourcesCard';
import SearchForm from '@/components/SearchForm';
import Filters from '@/components/Filters';
import { getResources, getResourcesPlaylist } from '@/sanity/actions';
import React from 'react';

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  });

  const resourcesPlaylist = await getResourcesPlaylist();

  console.log(resourcesPlaylist);

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-x1 bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>JavaScript Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>
      
      <Filters />

      {(searchParams?.query || searchParams?.category) && (
        <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <Header
            title="Resources"
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />
          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {resources && resources.length > 0 ? (
              resources.map((resource: any) => (
                <ResourcesCard
                  key={resource._id}
                  id={resource._id}
                  title={resource.title}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className='body-regular text-white-400'>No resources found</p>
            )
          }
          </div>
        </section>
      )}
      
      {resourcesPlaylist.map((item: any) => (
        <section key={item.id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <h1 className='heading3 self-start text-white-800'>
            {item.title}
            <div className='mt-12 flex w-full flex-wrap justfiy-center gap-16 sm:justify-start'>
              {item.resources && item.resources.map((resource: any) => (
                <ResourcesCard
                  key={resource._id}
                  id={resource._id}
                  title={resource.title}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))}
            </div>
          </h1>
        </section>
      ))}

    </main>
  );
};

export default Page;
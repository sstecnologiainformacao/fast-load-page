'use client';
import { formUrlQuery } from '@/sanity/utls';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react'

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack'];

const Filters = () => {
    const [active, setActive] = useState<string>();
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleActive = (link: string) => {
        let newUrl = '';

        if (active === link) {
            setActive('');
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category'],
                value: null,
            });
        } else {
            setActive(link);
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase(),
            });
        }
        router.push(newUrl, { scroll: false });
    };

    return (
        <ul className='text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
            {links.map((link)  => (
                <button
                    key={link}
                    onClick={() => handleActive(link)}
                    className={`whitespace-nowrap rounded-lg px-8 py-2.5 capitalize ${active === link ? 'gradient_blue-purple' : '' }`}                >
                    {link}
                </button>
            ))}
    </ul>
    )
}

export default Filters
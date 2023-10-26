import React from 'react';
import { getEveryArtist } from '@/libs/getEveryArtist';
import Card from '@/components/Card';

const consultPage = async () => {
  const data = await getEveryArtist();

  return (
    <main className='grid w-[90%] justify-center space-y-4 p-6'>
        {data.map(artist => (<Card key={artist.id} data={artist}/>))}
    </main>
  )
}

export default consultPage;
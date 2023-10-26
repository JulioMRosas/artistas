import React from 'react';
import { getEveryArtist } from '@/libs/getEveryArtist';
import Card from '@/components/Card';

const consultPage = async () => {
  const data = await getEveryArtist();

  return (
    <main className='grid p-6'>
      <h2 className='text-center text-[#333] mb-6'>Artistas registrados</h2>
      <div className='border-dotted border-b-2 border-[#ccc]'></div>
      <div className='grid grid-cols-3 justify-center p-6'>
          {data.map(artist => (<Card key={artist.id} data={artist}/>))}
      </div>

    </main>
  )
}

export default consultPage;
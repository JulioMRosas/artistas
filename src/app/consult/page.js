import React from 'react';
import { getEveryArtist } from '@/libs/getEveryArtist';

const consultPage = async () => {
  const data = await getEveryArtist();

  return (
    <main className='grid grid-cols-3'>
        {data.map(artist => (
            <ul key={artist.id} className='p-4'>
                <li>{artist.name}</li>
                <li>{artist.age}</li>
                <li>{artist.band}</li>
                <li>{artist.genre}</li>
            </ul>
        ))}
    </main>
  )
}

export default consultPage;
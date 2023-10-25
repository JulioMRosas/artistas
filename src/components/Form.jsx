"use client";
import React, { useState } from 'react';
import { addArtist } from '@/libs/addArtist';

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [band, setBand] = useState("");
  const [genre, setGenre] = useState("");

  const resetFields = () => {
    setName("");
    setAge("");
    setBand("");
    setGenre("");
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const artist = {
        name,
        age,
        band,
        genre
    }

    await addArtist(artist);
    resetFields(artist);
  }

  return <>
    <form className='w-[90%] mt-6 space-y-5'>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="name" className='font-semibold'>Nombre del artista</label>
            <input type="text" placeholder='ej. Hannah Montana' id='name' className='p-2 rounded-md bg-[#470d0db4]' value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="age" className='font-semibold'>Edad del artista</label>
            <input type="text" placeholder='ej. 21' id='age' className='p-2 rounded-md bg-[#470d0db4]' value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="band" className='font-semibold'>Banda o bandas de las que forma parte</label>
            <input type="text" placeholder='ej. Cannibal Corpse' id='band' className='p-2 rounded-md bg-[#470d0db4]' value={band} onChange={e => setBand(e.target.value)}/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="genre" className='font-semibold'>Genero o generos musicales</label>
            <input type="text" placeholder='ej. Pop, Rock, Jazz' id='genre' className='p-2 rounded-md resize-none bg-[#470d0db4]' value={genre} onChange={e => setGenre(e.target.value)}/>
        </div>
        <div className='flex justify-center'>
            <input type="submit" value="Registrar" className='text-white bg-[#470d0de7] mt-2 p-2 rounded-md cursor-pointer' onClick={handleSubmit}/>
        </div>
    </form>
  </>
}

export default Form;
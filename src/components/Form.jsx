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
    <form className='w-[50%] mt-14 mb-20 space-y-5'>
      <h2 className='text-center text-[#333]'>Registra a un artista!</h2>
      <div className='border-dotted border-b-2 border-[#ccc]'></div>
      <div className='flex flex-col space-y-3'>
          <label htmlFor="name" className='text-[#333]'>Nombre del artista</label>
          <input type="text" placeholder='ej. Hannah Montana' id='name' className='p-2 rounded-md border border-[#ccc]' value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <div className='flex flex-col space-y-3'>
          <label htmlFor="age" className='text-[#333]'>Edad del artista</label>
          <input type="text" placeholder='ej. 21' id='age' className='p-2 rounded-md border border-[#ccc]' value={age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div className='flex flex-col space-y-3'>
          <label htmlFor="band" className='text-[#333]'>Banda o bandas</label>
          <input type="text" placeholder='ej. Cannibal Corpse' id='band' className='p-2 rounded-md border border-[#ccc]' value={band} onChange={e => setBand(e.target.value)}/>
      </div>
      <div className='flex flex-col space-y-3'>
          <label htmlFor="genre" className='text-[#333]'>Genero o generos musicales</label>
          <input type="text" placeholder='ej. Pop, Rock, Jazz' id='genre' className='p-2 rounded-md border border-[#ccc]' value={genre} onChange={e => setGenre(e.target.value)}/>
      </div>
      <div className='flex justify-center'>
          <input type="submit" value="Registrar" className='font-bold text-[#fff] bg-[#00A1C6] mt-2 p-2 rounded-md cursor-pointer' onClick={handleSubmit}/>
      </div>
    </form>
  </>
}

export default Form;
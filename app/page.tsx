'use client';

import Image from 'next/image'
import Inter from './components/inter'
import useNote from './hooks/useNote'
import Other from './components/other'
import InterNote from './components/InterNote';
import React, { useCallback } from 'react';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const {notes, addNote, removeNote} = useNote()

  const handleOnClick = useCallback((e: React.MouseEvent<HTMLButtonElement>)  => {
    e.preventDefault();
    addNote(input);
    console.log(input);
    setInput('');
  },[input]);

  


  return (
    <main>this is main
      <div>
        <input className='pl-1 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-3/4 md:w-1/2 py-3'
        value={input}
        placeholder='1234'
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
          setInput(e.target.value);
        }}/>

        <button className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        bg-neutral-800
        text-neutral-100
        w-full`}onClick={handleOnClick}>test</button>
      </div>

      <div className='
        flex
        flex-col
      '>
        <div className='
          w-full
          bg-red-500/20
        '>outer notes</div>
        {notes.map((note, index) => (
          <div key={index} className='
            flex
            flex-row
          '>
            <p
              className='
                p-2
                m-2
              '
            >{note}</p>
            <button onClick={() => removeNote(note)}>remove</button>
          </div>
            ))
        }
      </div>

      <InterNote></InterNote>

    </main>    
  )
}

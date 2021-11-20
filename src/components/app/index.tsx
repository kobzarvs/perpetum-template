import React from 'react';
import {Clock} from '../../features/clock/components';
import './styles.css';


export const App = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="font-bold text text-gray-700 mt-4">Example clock component</h1>
      <Clock />

      <div
        className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xs:w-2/3 gap-2 place-items-center place-content-center p-2 ">
        <div className="text-2xl font-bold pt-2 pb-1 text-center md:col-span-2 xl:col-span-3 text-gray-700">
          Template includes
        </div>
        <a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">
          <img src="/images/parcel.png" alt="parcel-logo" className="logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="/images/typescript.png" alt="typescript logo" className="logo" />
        </a>
        <a href="https://ru.reactjs.org/" target="_blank" rel="noopener noreferrer">
          <img src="/images/react.png" alt="react logo" className="logo" />
        </a>
        <a href="https://effector.dev/" target="_blank" rel="noopener noreferrer">
          <img src="/images/effector.png" alt="effector logo" className="logo px-5" />
        </a>
        <a href="https://github.com/effector/patronum" target="_blank" rel="noopener noreferrer">
          <img src="/images/patronum.png" alt="patronum logo" className="logo px-4" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/tailwindcss.png" alt="tailwindcss logo" className="tailwind-logo" />
        </a>
        <a href="https://jestjs.io/ru/" target="_blank" rel="noopener noreferrer" className="logo text-white text-2xl"
           style={{width: 220, background: '#15c213'}}>
          JEST
        </a>
        <a href="https://testing-library.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/testing-library.png" alt="testing-library logo" className="logo" />
        </a>
        <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
          <img src="/images/eslint.png" alt="eslint logo" className="logo" />
        </a>
      </div>
    </div>
  );
};

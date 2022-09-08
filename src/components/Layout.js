import * as React from 'react';
import Header from './Header';
 

export default function Layout({children}) {
  return (
    <>
      <div>
      <Header />
      <div className="container mt-3">
        {children}
      </div>
    </div>
    </>
  );
}

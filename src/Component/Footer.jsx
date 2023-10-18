import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './All.css'; // Import your CSS file

export default function App() {
  return (
    <MDBFooter className='footer'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a href='https://mdbootstrap.com/'>E-commerce</a>
      </div>
    </MDBFooter>
  );
}

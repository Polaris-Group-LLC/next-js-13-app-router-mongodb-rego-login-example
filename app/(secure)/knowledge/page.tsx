'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page: React.FC = () => {
  const notify = () => toast("This is a toast notification!");

  return (
    <div>
      <h1>Welcome to the Knowledge Page</h1>
      <p>This is a template page with some placeholder text.</p>
      <button onClick={notify}>Show Toast</button>
    </div>
  );
};

export default Page;
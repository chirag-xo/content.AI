import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  return (
    <div className="flex justify-center items-start min-h-screen px-4 sm:px-6 md:px-8 pt-24 pb-10">
      <div className="w-full max-w-4xl">
        <UserProfile
          routing="hash"
        />
      </div>
    </div>
  );
}

export default Settings;

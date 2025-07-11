'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header/header';
import { Input } from '@/components/ui/input';

export default function Api() {
  const [showKey, setShowKey] = useState(false);
  const [apiKey, setApiKey] = useState('API_KEY_HERE');
  return (
    <div>
      <Header title={"Api"} />
      <main className='p-6'>
        <div className='w-full h-full rounded-md p-2 flex flex-col gap-4 bg-neutral-50 shadow-md dark:bg-neutral-800'>
          <div className='flex justify-center items-center'>
            <span className='text-neutral-900 text-2xl uppercase font-bold dark:text-neutral-50'>Api</span>
          </div>

          {/* Api show hide button */}
          <div className='flex justify-between items-center'>
            <span>Api key</span>
            <div className='flex gap-2 w-[50%]'>
              <Input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                readOnly
                className='flex-1'
              />
              <Button variant="outline" onClick={() => setShowKey((v) => !v)}>
                {showKey ? 'Hide' : 'Show'}
              </Button>
            </div>
          </div>

          <Button className='w-[10%] self-end' type='submit'>
            <span>Apply</span>
          </Button>

          <hr />
          {/* Available api endpoints */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                Available API Endpoints
              </p>
            </div>
            {/* Will add available enpoints in future 
            not now cuz im tooooooo lazyyyyyyyyyyy

            uhh i hate this
            */}
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-200">
              <li>/api/test</li>
              <li>More endpoints coming soon...</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

'use client';
import { Button } from '@/components/ui/button';
import Header from '../components/Header/header';
import { toast } from 'sonner';

export default function Settings() {
  return <>
    <Header title={"Settings"} />
    <div className='p-4' >
      <Button className='cursor-pointer' 
      onClick={() => {
        toast.info("Clicked on Button ")
      }}
      >
        Settings
      </Button>
    </div>
  </>
}

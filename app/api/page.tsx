import { Button } from '@/components/ui/button';
import Header from '../components/Header/header';
import { Input } from '@/components/ui/input';

export default function Api() {
  return <div>
    <Header title={"Api"} />
    <main className='p-6' >
      <div className='w-full h-full rounded-md p-2 flex flex-col gap-4 bg-neutral-50 shadow-md dark:bg-neutral-800 '>
        <div className='flex justify-center items-center' >
        <span className='text-neutral-900 text-2xl uppercase font-bold dark:text-neutral-50' >Api</span>
        </div>

        <div className='flex justify-between' >
          <span>Api key</span>
          <Input type='text' placeholder='API_KEY_HERE' className='w-[50%]' />
        </div>

        <Button className='w-[10%] self-end' type='submit' >
          <span>Apply</span>
        </Button>
      </div>
    </main>
  </div>
}

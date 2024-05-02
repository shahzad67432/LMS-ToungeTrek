import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { quests } from '@/constants'
import { Progress } from './ui/progress'

type props = {
    points: number
}

const Quests = ({points}:props) => {
  return (
    <div className='rounded-xl border-2 p-4 space-y-4'>
        <div className='flex items-center w-full justify-between space-y-2'>
            <h3 className='font-bold text-lg'>Quests</h3>
            <Link href={'/quests'}>
                <Button 
                    size={'sm'}
                    variant={'primaryOutline'}
                >
                    View all
                </Button>
            </Link>
        </div>
        <ul className='w-full space-y-4'>
            {quests.map((quest)=>{
              const progress = (points / quest.value) * 100;
              return(
                <div key={quest.title} className='flex items-center w-full pt-4 gap-x-3'>
                    <Image
                      src={'/points.svg'}
                      width={40}
                      height={40}
                      alt='points'
                    />
                    <div className='flex flex-col gap-y-2 w-full'>
                      <p className='text-sm font-bold text-neutral-700'>
                        {quest.title}
                      </p>
                      <Progress
                        value={progress} className='h-3'
                      />
                    </div>
                </div>
              )
            })}
          </ul>
    </div>
  )
}

export default Quests
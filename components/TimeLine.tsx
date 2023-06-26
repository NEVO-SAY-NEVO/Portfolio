"use client"
import classNames from 'classnames';
import { motion } from 'framer-motion';
interface TimelineEventProps {
  active?: boolean;
  children: React.ReactNode;
  last?: boolean;
}

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ y: [-50, 0], opacity: 1 }} className='w-full mb-16 p-6 text-[#32e0ff]'>

      <h2 className='text-center text-3xl  font-header font-bold mb-6 md:text-left'>Employment Experience</h2>

      {children}

    </motion.div>
  )
}

export const TimelineEvent = ({ active, children, last }: TimelineEventProps) => {
  return (
    <div
      className={classNames('w-full flex justify-start gap-6 border-[#05112c]', {
        'border-l': !last,
        'pb-16': !last,
      })}
    >
      <div className='relative'>
        <div
          className={classNames(
            'absolute left-[-8.5px] w-4 h-4 rounded-full aspect-square outline-black',
            {
              'bg-emerald-500': active,
              'bg-[#32e0ff]': !active,
              'w-3 h-3': !active,
              'left-[-5.5px]': !active,
            }
          )}
        >
          {active && (
            <div
              className={classNames(
                'absolute top-0 left-0 rounded-full z-[-1] w-4 h-4 bg-emerald-500 animate-ping aspect-square'
              )}
            />
          )}
        </div>
      </div>
      <div className='mt-[-4px] flex flex-col gap-2'>{children}</div>
    </div>
  );
}

const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => <p className='text-2xl relative bottom-1 font-semibold font-header text-[#32e0ff]'>{children}</p>;

const TimelineEventDescription = ({ children }: { children: React.ReactNode }) => <p className='text-lg font-header text-[#bfd8f5]'>{children}</p>;

TimelineEvent.Title = TimelineEventTitle;

TimelineEvent.Description = TimelineEventDescription;
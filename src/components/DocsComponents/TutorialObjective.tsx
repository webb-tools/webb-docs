import React from 'react'
import Link from '../Link'

interface TutorialObjectiveProps {
  data: { textLineOne: string; textLineTwo?: string; url: string }
}

export function TutorialObjective({ data }: TutorialObjectiveProps) {
  return (
    <>
      <div className="my-2 xl:pt-4 xl:flex xl:justify-start xl:items-start xl:bg-webbGray-light xl:dark:bg-webbDark">
        <div className="hidden xl:inline-block xl:ml-8 xl:mr-4 xl:mt-1 xl:w-7 xl:h-7">
          <svg
            className="fill-current text-webbBlue"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.30679 15C3.96693 15 3.69141 15.2798 3.69141 15.625C3.69141 15.9702 3.96693 16.25 4.30679 16.25H6.76832C7.1082 16.25 7.38371 15.9702 7.38371 15.625C7.38371 15.2798 7.1082 15 6.76832 15H4.30679Z" />
            <path d="M3.69141 12.5C3.69141 12.1548 3.96693 11.875 4.30679 11.875H9.22986C9.56974 11.875 9.84524 12.1548 9.84524 12.5C9.84524 12.8452 9.56974 13.125 9.22986 13.125H4.30679C3.96693 13.125 3.69141 12.8452 3.69141 12.5Z" />
            <path d="M4.30679 8.75C3.96693 8.75 3.69141 9.02981 3.69141 9.375C3.69141 9.72019 3.96693 10 4.30679 10H11.6914C12.0313 10 12.3068 9.72019 12.3068 9.375C12.3068 9.02981 12.0313 8.75 11.6914 8.75H4.30679Z" />
            <path d="M16 6.87994V6.875C16 6.86188 15.9996 6.84875 15.9987 6.83569C15.9997 6.85038 16.0001 6.86519 16 6.87994L9.31316 0.00562983C9.28602 0.00190036 9.25851 0 9.23076 0H3.07692C1.37759 0 0 1.39911 0 3.125V16.875C0 18.6009 1.37759 20 3.07692 20H12.9231C14.6224 20 16 18.6009 16 16.875V6.87994ZM8.61537 4.375C8.61537 6.10089 9.99297 7.5 11.6923 7.5H14.7692V16.875C14.7692 17.9106 13.9427 18.75 12.9231 18.75H3.07692C2.05732 18.75 1.23077 17.9106 1.23077 16.875V3.125C1.23077 2.08947 2.05732 1.25 3.07692 1.25H8.61537V4.375ZM9.84614 2.13388L13.8989 6.25H11.6923C10.6727 6.25 9.84614 5.41053 9.84614 4.375V2.13388Z" />
          </svg>
        </div>

        <div className="xl:w-5/6">
          <p className="font-medium mb-0">{data.textLineOne}</p>
          <p className="hidden xl:block font-light">{data.textLineTwo}</p>
        </div>
        <Link
          className={`md-button hidden xl:block bg-red-400 ${
            !data.textLineTwo ? `xl:-mt-1` : `xl:mt-1`
          }  xl:mr-4`}
          to={data.url}
        >
          <button className="w-10 h-10 bg-webbBlue rounded flex justify-center items-center">
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.72417 7.88161C9.48129 8.11736 9.3469 8.43311 9.34994 8.76086C9.35297 9.08861 9.4932 9.40212 9.74042 9.63388C9.98763 9.86564 10.3221 9.9971 10.6717 9.99995C11.0213 10.0028 11.3581 9.87681 11.6095 9.64911L15.6096 5.89911C15.8596 5.6647 16 5.34681 16 5.01536C16 4.6839 15.8596 4.36602 15.6096 4.13161L11.6095 0.381609C11.4865 0.262221 11.3394 0.166993 11.1767 0.101482C11.0141 0.0359707 10.8391 0.00148753 10.6621 4.54219e-05C10.485 -0.00139668 10.3094 0.0302301 10.1456 0.0930811C9.98171 0.155932 9.83284 0.248749 9.70765 0.366115C9.58245 0.483481 9.48345 0.623046 9.4164 0.776666C9.34936 0.930287 9.31563 1.09489 9.31716 1.26086C9.3187 1.42683 9.35549 1.59086 9.42537 1.74336C9.49525 1.89587 9.59682 2.0338 9.72417 2.14911L11.4482 3.76536L1.33336 3.76536C0.97973 3.76536 0.640585 3.89706 0.390532 4.13148C0.14048 4.3659 8.64535e-07 4.68384 9.25727e-07 5.01536C9.86918e-07 5.34688 0.14048 5.66482 0.390533 5.89924C0.640585 6.13366 0.97973 6.26536 1.33336 6.26536L11.4482 6.26536L9.72417 7.88161Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  )
}

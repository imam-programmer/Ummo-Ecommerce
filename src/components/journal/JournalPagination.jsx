import React, { useState } from 'react'

const JournalPagination = () => {
    const [shown, setshown] = useState(0)
    //  const shown = 4;
  const total = 49;
  const progress = Math.min(100, Math.ceil((shown / total) * 100));
  return (
     <div className="mt-16 flex flex-col items-center gap-3">
          <span
            className="text-xs tracking-wide"
            style={{ color: "var(--color-gray)" }}
          >
            SHOWING {shown} of {total} ITEMS
          </span>

          <div className="h-0.5 w-40 bg-gray-200">
            <div
              className="h-full bg-primary"
              style={{ width: `${progress}%`}}
            />
          </div>

          <button onClick={()=>setshown(shown+10)}
            type="button"
            className="mt-2 cursor-pointer text-xs text-primary font-semibold tracking-wide underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60"
            
          >
            SHOW MORE
          </button>
        </div>
  )
}

export default JournalPagination
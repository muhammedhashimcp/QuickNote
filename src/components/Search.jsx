'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'


export default function Search({ search }) {
  const router = useRouter()
  const initialRender = useRef(true)

  const [text, setText] = useState(search)
  const [query] = useDebounce(text, 750)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!query) {
      router.push(`/movies`)
    } else {
      router.push(`/movies?search=${query}`)
    }
  }, [query])



  return (
    <div className=" ">
      {/* <form onSubmit={handleSubmit}> */}
      <div className="flex border border-solid border-slate-500 w-fit mx-auto">
        <input
          value={query}
          onChange={(e) => setText(e.target.value)}
          className=" px-8 py-2"
          type="text"
          placeholder="Search Note..."
        />
        {/* <button className="bg-green-500 text-white  px-3 py-2 hover:bg-slate-800" type="submit">
            Search
          </button> */}
      </div>
      {/* </form> */}
    </div>
  )
}
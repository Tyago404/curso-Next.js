'use client'
import clsx from "clsx";

export default function Header() {
  return(
    <>
       <h1
        className={clsx(
          "text-blue-600",
          "bg-white",
          "font-bold",
          "hover:bg-blue-600",
          "hover:text-white",
          "transition",
          "duration-1000"
        )}

        onClick={()=>alert('CLIENT COMPONENT!')}
      >
        HomePage!
      </h1>
    </>
  )
}

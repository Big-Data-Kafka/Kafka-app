import React, {useRef, useContext} from 'react'
import { FilterContext } from '../pages/dashboard';

const FilterBox = () => {
  const {setToSearch}= useContext(FilterContext)
  const ref= useRef();
  const filterHandler= ()=>{
    setToSearch(ref.current.value);
  }
  return (
    <form className="max-w-md mx-auto">
            <div className="relative">
              <input
              ref={ref}
                type="search"
                className="block w-full p-4 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search by username..."
                required
              />
              <button
                type="button"
                className="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 rounded-lg text-sm px-4 py-2"
                onClick={filterHandler}
              >
                Search
              </button>
            </div>
    </form>
  )
}

export default FilterBox
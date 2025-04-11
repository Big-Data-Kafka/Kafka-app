import React from 'react'

const FilterBox = () => {
  return (
    <form className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                className="block w-full p-4 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search by username..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
    </form>
  )
}

export default FilterBox
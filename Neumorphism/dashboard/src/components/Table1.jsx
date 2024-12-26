import React from 'react'

function Table1() {
  return (
    <div>
      <table className='w-full text-center neu-effect-1 my-4 rounded-lg border-separate border-spacing-4'>
        <thead >
          <tr className='neu-effect-1 rounded-lg' >
            <th className='p-4'>head</th>
            <th className='p-4'>head</th>
            <th className='p-4'>head</th>
            <th className='p-4'>head</th>
            <th className='p-4'>head</th>
          </tr>
        </thead>
        <tbody>
          <tr className='neu-effect-1 rounded-lg'>
            <td className='p-4'>data1</td>
            <td className='p-4'>data1</td>
            <td className='p-4'>data1</td>
            <td className='p-4'>data1</td>
            <td className='p-4'>data1</td>
          </tr>
          <tr className='neu-effect-1 rounded-lg'>
            <td className='p-4'>data2</td>
            <td className='p-4'>data2</td>
            <td className='p-4'>data2</td>
            <td className='p-4'>data2</td>
            <td className='p-4'>data2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table1
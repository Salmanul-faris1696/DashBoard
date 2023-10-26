import React from 'react'

function Table() {

  const data = [
    {
      agentId: 1,
      agentName: 'Agent 1',
      branchName: 'Branch A',
      buyerName: 'Buyer X',
    },
    {
      agentId: 2,
      agentName: 'Agent 2',
      branchName: 'Branch B',
      buyerName: 'Buyer Y',
    },
    {
      agentId: 3,
      agentName: 'Agent 3',
      branchName: 'Branch c',
      buyerName: 'Buyer Y',
    },
    {
      agentId: 4,
      agentName: 'Agent 4',
      branchName: 'Branch d',
      buyerName: 'Buyer Y',
    },
    {
      agentId: 5,
      agentName: 'Agent 5',
      branchName: 'Branch e',
      buyerName: 'Buyer Y',
    },
    {
      agentId: 6,
      agentName: 'Agent 6',
      branchName: 'Branch f',
      buyerName: 'Buyer Y',
    },
  ]

  




  return (
    <div>
    <div className="overflow-x-auto m-3 border rounded-md shadow-gray-400 shadow-lg">
     <p className='m-3'>
      Agent table 
     </p>
      <table className="min-w-full divide-y divide-gray-200 mt-10">
        <thead className=" ">
          <tr  className=''>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              Agent ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Agent Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Branch Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Buyer Name
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((agent) => (
            <tr key={agent.agentId}>
              <td className="px-6 py-4 ">{agent.agentId}</td>
              <td className="px-6 py-4 ">{agent.agentName}</td>
              <td className="px-6 py-4 ">{agent.branchName}</td>
              <td className="px-6 py-4 ">{agent.buyerName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      









    </div>

   


    
 

    </div>
  )
}

export default Table
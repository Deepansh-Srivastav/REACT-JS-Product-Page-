import React from 'react'

let a = 55,
    b=68;

const Evaluate = () => {

  return (
    <div>

        <h1>The values are {a} and {b} respectively</h1>

        {a<b?<h1>False</h1>:<h1>True</h1>}

    </div>
  )
}

export default Evaluate

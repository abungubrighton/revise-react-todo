import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
        <li key={todo}>{todo}</li>
    </div>
  )
}

export default Todo
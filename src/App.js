import React, { useState } from 'react'

const Anecdote = ({ anecdote }) => <div>{anecdote}</div>
const NumVotes = ({ num }) => <div>has {num} votes</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const SelectRandom = () => {
    const randomSelection = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomSelection)
  }

  const Vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes = Math.max(...votes)
  const indexOfAnecdoteWithMostVotes = votes.indexOf(mostVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <NumVotes num={votes[selected]} />
      <Button onClick={Vote} text='Vote' />
      <Button onClick={SelectRandom} text='Next anecdote' />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[indexOfAnecdoteWithMostVotes]} />
      <NumVotes num={votes[indexOfAnecdoteWithMostVotes]} />
    </div>
  )
}

export default App

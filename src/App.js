import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")
  const [fbooks, setfBooks] = useState([])

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    axios.get("http://localhost:2345/books").then(({ data }) => {
      setBooks(data)
      setfBooks(data)
    })
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => {
        setSearch(e.target.value)
      }}/>
      <button onClick={()=>{
        const temp = books.filter((item) => {
          if(item.title === search)
            return item;
        })
        setfBooks(temp)
      }}>Search</button>
      <div>
        {fbooks.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{item.author}</div>
              <div>{item.publish_year}</div>
              <br />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

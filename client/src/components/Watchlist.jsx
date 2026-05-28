import { useState, useEffect } from "react"
import { db } from "../firebase"
import { getAuth } from "firebase/auth"

import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore"

function Watchlist() {

  const [stock, setStock] = useState("")
  const [list, setList] = useState([])

  const auth = getAuth()
  const user = auth.currentUser

  // Fetch user watchlist
  const fetchWatchlist = async () => {

    if (!user) return

    const q = query(
      collection(db, "watchlist"),
      where("userId", "==", user.uid)
    )

    const snapshot = await getDocs(q)

    const data = snapshot.docs.map(doc => doc.data())

    setList(data)
  }

  useEffect(() => {
    fetchWatchlist()
  }, [user])

  const addToWatchlist = async () => {

    if (!stock || !user) return

    await addDoc(collection(db, "watchlist"), {
      stockName: stock,
      userId: user.uid,
      createdAt: new Date()
    })

    setStock("")
    fetchWatchlist()
  }

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">

      <h2 className="text-white text-2xl font-bold mb-4">
        My Watchlist
      </h2>

      <div className="flex gap-3 mb-5">

        <input
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Enter stock"
          className="flex-1 p-3 rounded bg-zinc-800 text-white"
        />

        <button
          onClick={addToWatchlist}
          className="bg-green-500 px-5 rounded font-bold"
        >
          Add
        </button>

      </div>

      <div className="space-y-2">

        {list.map((item, index) => (

          <div
            key={index}
            className="bg-zinc-800 p-3 rounded text-white"
          >
            {item.stockName}
          </div>

        ))}

      </div>

    </div>

  )
}

export default Watchlist
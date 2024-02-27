import { useEffect, useState } from 'react'
import './App.css'
import { Review } from './Review'
import { ReviewComp } from './components/ReviewComp'



function App() {
  const [reviews, setRewievs] = useState([] as Review[])
  const [serachTerm, setSearchTerm] = useState('');
  const [SecondSerachTerm, setSecondSearchTerm] = useState('');


  useEffect(() =>{
    async function load() {
      const response = await fetch("/reviews.json")
      const reviews = await response.json() as Review[];
      setSecondSearchTerm("10")
      setSearchTerm("1")
      reviews.sort((a,b) => -a.rating + b.rating)
      

      setRewievs(reviews)


    }
    load();
  },[])

  if(parseInt(serachTerm) > parseInt(SecondSerachTerm))
  {
   alert("Az alsó határ nem lehet nagyobb mint a felső határ");
   setSearchTerm("1")

  }


  const filtered = reviews.filter(review => ((review.rating) >= parseInt(serachTerm) && (review.rating) <= parseInt(SecondSerachTerm) ))

  return (
   <div className='container'>

    <label htmlFor="">Alsó határ: </label>
    <input type="text" id='alsoHatar' onInput={e =>{setSearchTerm(e.currentTarget.value)}} />
    <label htmlFor="">Felső határ: </label>
    <input type="text"  onInput={e =>{setSecondSearchTerm(e.currentTarget.value)}} />
  
    <ul>
      {
          filtered.map(review => <ReviewComp
          review={review}
         
        />)
      }
    </ul>

   </div>
  )
}

export default App

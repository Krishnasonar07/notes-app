import {useState} from 'react'
const App=()=>{
  const [title,setTitle]=useState([])
  const [text,setText]=useState('')
  const [a,setA]=useState({heading:'',note:''})
  
  return <div className=' lg:flex bg-black text-white'>
      <form className='flex flex-col lg:w-1/2 gap-5 items-start p-10' 
      onSubmit={(e)=>{
        e.preventDefault()
        setTitle(user=>[...user,a])
        setA({heading:'',note:''})
           
      }}
      >
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
        <input type='text' placeholder='eneter heading'
        className='border  w-full  py-2 px-5 rounded border-white '
        value={a.heading}
        onChange={(e)=>{
          setA(user=>({
            ...user,heading:e.target.value
          }))
        }}/>
        <textarea type='text' placeholder='eneter heading'
        className='border w-full h-40 px-5 py-2 rounded border-white'
        value={a.note}
        onChange={(e)=>{
          setA(user=>({
            ...user,note:e.target.value
          }))
        }}/>
        <button className='bg-white rounded w-full py-2 text-black'>Add Notes</button>
      </form>

    <div className="lg:w-1/2 lg:border-l-2  p-10">
    <h1 className='text-4xl font-bold'>Recent Notes</h1>
    <div className="flex gap-4 flex-wrap">
      {title.map(function(i){
        return <div className="flex flex-col items-start no-scrollbar  justify-start  p-2 gap mt-6 overflow-auto card w-40 h-60 bg-white rounded-2xl text-black">
                 <h4 className='font-bold border-b text-lg'>{i.heading}</h4>
                 <p className='text-sm'>{i.note}</p>
               </div>
      })}
      </div>
    </div>
    
  </div>
}
export default App

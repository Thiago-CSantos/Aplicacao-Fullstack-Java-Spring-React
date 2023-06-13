
import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './components/hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

export default function App() {

  const {data} = useFoodData();
  const [ismodalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = ()=>{
    setIsModalOpen(prev =>!prev)
  }

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData =>
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        )}
      </div>
      {ismodalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

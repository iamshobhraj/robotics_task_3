import {useEffect, useState} from 'react'
import axios from "axios";
import Cards from "./components/cards.jsx";
import './App.css'
import data from './assets/data.json'

function App() {

    const [cd, setCd] = useState("");
    useEffect(() => {
        const url = 'https://jsonblob.com/api/jsonBlob';
        axios.get(url).then(response => {
            console.log(response.data);
            setCd(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])
    const cardData = [{
        "id": 1,
        "name": "Taj Mahal",
        "location": "Agra, Uttar Pradesh",
        "speciality": "Mughal architecture",
        "description": "The Taj Mahal is a stunning white marble mausoleum built by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and one of the most iconic symbols of India.",
        "image": "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
        {
            "id": 2,
            "name": "Hampi",
            "location": "Karnataka",
            "speciality": "Vijayanagara architecture",
            "description": "Hampi is an ancient village known for its well-preserved ruins of the Vijayanagara Empire. It's a UNESCO World Heritage Site and a testament to India's rich history.",
            "image": "https://images.pexels.com/photos/3936815/pexels-photo-3936815.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 3,
            "name": "Khajuraho Group of Monuments ",
            "location": "Madhya Pradesh",
            "speciality": "Erotic sculptures",
            "description": "The Khajuraho Group of Monuments features intricately carved temples with erotic sculptures. It's a UNESCO World Heritage Site and a marvel of temple art and architecture.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6xcaQRnFrZ7iaUIkwEA1akWZ-wrDG_4Z6A&usqp=CAU"
        },
        {
            "id": 4,
            "name": "Ajanta Caves",
            "location": "Maharashtra",
            "speciality": "Rock-cut architecture",
            "description": "The Ajanta Caves are a series of rock-cut cave monasteries with stunning paintings and sculptures, showcasing India's ancient artistic heritage.",
            "image": "https://images.pexels.com/photos/2563594/pexels-photo-2563594.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 5,
            "name": "Ellora Caves",
            "location": "Maharashtra",
            "speciality": "Rock-cut architecture",
            "description": "The Ellora Caves contain rock-cut temples and monasteries representing Hindu, Buddhist, and Jain traditions, making it a UNESCO World Heritage Site.",
            "image": "https://media.istockphoto.com/id/483561330/photo/ellora-caves-buddhist-temples-in-arrangabad-india.webp?b=1&s=170667a&w=0&k=20&c=5ahstoP7T-JQM_OPk2ZqiC2SdNyDrrU-pqIfeSOmLvg="
        },
        {
            "id": 6,
            "name": "Mehrangarh Fort",
            "location": "Jodhpur, Rajasthan",
            "speciality": "Rajput architecture",
            "description": "Mehrangarh Fort is a massive and imposing fort known for its intricate carvings, grand palaces, and stunning views of Jodhpur.",
            "image": "https://images.pexels.com/photos/5102986/pexels-photo-5102986.jpeg?auto=compress&cs=tinysrgb&w=600"
        },]
  return (
    <>
        <div className={`heading text-center p-6 font-bold text-4xl`}>
            <span>Tourists' places in India</span>
        </div>
        <div className={`main grid grid-cols-3 bg-[#111148] pt-9 px-36 gap-9`}>
            {data.items.map((card, index) => (
                <Cards key={index} card={card} />
            ))}
        </div>
    </>
  )
}

export default App

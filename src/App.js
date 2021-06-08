import {Item} from './components/Item/Item'
import './App.css'
import logo1 from './image/image1.png'
import logo2 from './image/image2.png'
import logo3 from './image/image3.png'

const items = [
  {
    id: 1,
    image: logo1,
    title: 'Шампунь 1',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    price: 100,
  },
  {
    id: 2,
    image: logo2,
    title: 'Шампунь 2',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    price: 200,
  },
  {
    id: 3,
    image: logo3,
    title: 'Шампунь 3',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    price: 300,
  }
]

function App() {
  return (
        <div className={'container'}>
          {items.map((item, key) => {
            return (
              <Item
                key={key}
                id={item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            )
          })}
        </div>
      )
    }

export default App

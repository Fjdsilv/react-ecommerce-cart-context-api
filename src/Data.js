import coca from './img/1coca.png'
import pepsi from './img/2pepsi.png'
import juice from './img/3juice.png'
import burger from './img/4burger.png'
import fries from './img/5fries.png'
import pizza from './img/6pizza.png'

const products = [
    {
        _id: "1",
        img: `${coca}`,
        name: 'Coca',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 2,
        units: 20
    },
    {
        _id: "2",
        img: `${pepsi}`,
        name: 'Pepsi',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 3,
        units: 20
    },
    {
        _id: "3",
        img: `${juice}`,
        name: 'Juice',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 5,
        units: 15
    },
    {
        _id: "4",
        img: `${burger}`,
        name: 'Burger',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 10,
        units: 25
    },
    {
        _id: "5",
        img: `${fries}`,
        name: 'Fries',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 7,
        units: 35
    },
    {
        _id: "6",
        img: `${pizza}`,
        name: 'Pizza',
        about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 12,
        units: 30
    }
]

export default products;
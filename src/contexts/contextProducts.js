import React, {useState} from "react";

// craete global state with contextAPIs
const ContextProducts = React.createContext()

const ProviderProducts = ({children}) => {
    const [products, handleProducts] = useState(
        [
            {
                _id: "1",
                img: "https://picsum.photos/id/237/200/200",
                name: 'Coca',
                about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                price: 2,
                units: 20
            },
            {
                _id: "2",
                img: "https://picsum.photos/id/237/200/200",
                name: 'Pepsi',
                about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                price: 3,
                units: 20
            },
            {
                _id: "3",
                img: "https://picsum.photos/id/237/200/200",
                name: 'Juice',
                about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                price: 5,
                units: 15
            },
            {
                _id: "4",
                img: "https://picsum.photos/id/237/200/200",
                name: 'Burger',
                about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                price: 10,
                units: 25
            },
            {
                _id: "5",
                img: "https://picsum.photos/id/237/200/200",
                name: 'Fries',
                about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                price: 7,
                units: 35
            },
            {
                _id: "6",
                img: "https://picsum.photos/id/237/200/200",
                name: 'Pizza',
                about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                price: 12,
                units: 30
            }
        ]
    )

    return (
        <ContextProducts.Provider value={{products}}>
        {children}            
        </ContextProducts.Provider>
    )
}

export { ContextProducts, ProviderProducts}



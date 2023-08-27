import React,{useState} from "react";


const data=[
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];




const Menu=()=>{
    let [items,setItems] = useState(data);

    function filterItems(e){
        console.log(e)
        if(e == "all"){
            setItems(data);
            return;
        }
        const filteredData = data.filter((item)=>{
            return item.category === e
        })
        setItems(filteredData);
    }
    return (
    <div>
        <h1 className='heading'>Our Menu</h1>
        <ul type='none'>
            <li onClick={(e)=>filterItems("all")} value="all">All</li>
            <li onClick={(e)=>filterItems("breakfast")}>Breakfast</li>
            <li onClick={(e)=>filterItems("lunch")}>Lunch</li>
            <li onClick={(e)=>filterItems("shakes")} >Shakes</li>
        </ul>
        <div className='container'>
            {
                items.map((item,index)=>(
                    <div key={index} className='item'>
                        <div className='left'>
                            <img src="" alt='image' />
                        </div>
                        <div className='right'>
                            <div className='top'>
                                <b>{item.title}</b>
                                <p>$ {item.price}</p>
                            </div>
                            <div className="bottom">
                                <p className='desc'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        
        </div>

    </div>
  )
}

export default Menu;
// import React from 'react'
import {useState} from 'react'
import './_categoryBar.scss'

const Keywords= [
    "All",
    'Music',
  'Gaming',
  'Travel & Adventure',
  'Science & Technology',
  'Food & Cooking',
  'Fitness & Wellness',
  'Comedy',
  'Fashion & Beauty',
  'Education',
  'Art & Creativity',
  'Sports',
  'Pets & Animals',
  'Vlogs',
  'Movies & TV Shows',
  'DIY & Crafts',
  'Business & Finance',
  'Book Reviews',
  'Parenting',
]


const CategoryBar = () => {

    const [activeElement,setActiveElement] = useState('All')


    const handleClick =(value)=> {
        setActiveElement(value)
    }

    return (
      <div className="CategoryBar">
        {
        Keywords.map((value,i) =>
        <span 
        
        onClick={()=> handleClick(value)} key={i} 
        className={activeElement === value ?'active' : ''}>{value}</span>
        )}
      </div>
    )
  }
  
  export default CategoryBar
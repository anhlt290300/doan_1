import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'
import ProductCard from './ProductCard'
const InfinityList = props => {
    console.log(props.catalog)
    const perLoad = 4
    const listRef = useRef(null)
    const [data,setData] = useState(props.Data.slice(0,perLoad))

    const [load,setLoad] = useState(true)

    const [index,setIndex] = useState(0)

    useEffect( ()=>{
        setData(props.Data.slice(0,perLoad))
        setIndex(1)
    },[props.Data])
    useEffect( ()=>{
        const clientHeight = listRef.current.clientHeight
        const offsetTop = listRef.current.offsetTop
        window.addEventListener("scroll",()=>{
            if(listRef && listRef.current){
                if(window.scrollY + window.innerHeight >= clientHeight + offsetTop +200){
                    
                    setLoad(true)
                    
                }
            }
            
        })
    },[listRef])

    useEffect(()=>{
        
        const getItem = ()=>{
            const pages = Math.floor(props.Data.length/perLoad)
            const maxIndex = props.Data.length % perLoad === 0 ? pages : pages+1
            
            if(load && index <= maxIndex){
                const start = perLoad*index
                const end = start + perLoad
                console.log(start)
                console.log(end)
                setData(data.concat(props.Data.slice(start,end)))
                setIndex(index+1) 
            }          
            
        }
        getItem()
        setLoad(false)
            
    },[load,index,data])

    
  return (
    <div ref={listRef}>
             
        <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                      data.map((item,index)=>(
                        <ProductCard
                          key={index}
                          img01={item.image01}
                          img02={item.image02}
                          name={item.title}
                          price={(item.price)}
                          slug={item.slug}
                          catalog={props.catalog}
                        >

                        </ProductCard>
                      ))
                    }
                </Grid>
    </div>
  )
}

InfinityList.propTypes = {
    Data: PropTypes.array.isRequired,
    catalog: PropTypes.bool.isRequired
}

export default InfinityList
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Helmet from '../component/Helmet'
import accessoriesData from '../assets/fake-data/bags'
import category from '../assets/fake-data/category_accessories'
import CheckBox from '../component/CheckBox'
import color from '../assets/fake-data/product-color'
import Button from '../component/Button'
import InfinityList from '../component/InfinityList.jsx'

const Accessories = props => {

    const initFilter = {
        category : [],
        color: []
    }
    
    const productList = accessoriesData.getAllproduct()
    /* console.log(productList ) */
    const [products, setProducts] = useState(productList)
    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
    
        if (checked){
          switch(type){
            case "CATEGORY":
                setFilter({...filter,category:[...filter.category,item.categorySlug]})
                
                break
            case "COLOR":
                setFilter({...filter,color:[...filter.color,item.color]})
                break
            
            default:
          
          }
        }else{
          switch(type){
            case "CATEGORY":
                const newCategory = filter.category.filter(e=>e !== item.categorySlug)
                setFilter({...filter,category:newCategory})
                break;
            case "COLOR":
                const newColor = filter.color.filter(e=>e !== item.color)
                setFilter({...filter,category:newColor})
                break;
            
            default:
          
          }
        }        
      }
      const updateProducts = useCallback(
        ()=>{
        
        let temp  = productList
  
        if(filter.category.length>0){
          temp = temp.filter(e => filter.category.includes(e.categorySlug))
        }
  
        if(filter.color.length>0){
          temp = temp.filter(e=>{
            const check = e.colors.find(color => filter.color.includes(color))
            return check !== undefined
          })
        } 
        
        
        setProducts(temp)
      }, [filter,productList],
    )
    useEffect(()=>{
        updateProducts()
      },[updateProducts])
  
      const clearFilter = () =>{
          setFilter(initFilter)
      }
  
      const filterRef = useRef(null)
  
      const showHideFilter = () =>{
        filterRef.current.classList.toggle('active')
      }
    console.log(productList)
  return (
    <Helmet title='phụ kiện'>
        <div className="accessories">
          <div className="accessories__filter" ref={filterRef}>
              <div className="accessories__filter__close" onClick={()=> showHideFilter()}>
                  <i className='bx bx-left-arrow-alt'></i>
              </div>
              <div className="accessories__filter__widget">
                  <div className="accessories__filter__widget__title">
                      danh muc san pham
                  </div>
                  <div className="accessories__filter__widget__content">
                      {
                        category.map((item,index)=>(
                          <div key={index} className='catalog__filter__widget__content__item'>
                              <CheckBox 
                                label={item.display}
                                onChange ={(input) => filterSelect("CATEGORY",input.checked,item)} 
                                checked={filter.category.includes(item.categorySlug)}                              
                              />
                              
                          </div>
                        ))
                      }
                  </div>
                  <div className="catalog__filter__widget__title">
                      mau sac
                  </div>
                  <div className="catalog__filter__widget__content">
                      {
                        color.map((item,index)=>(
                          <div key={index} className='catalog__filter__widget__content__item'>
                              <CheckBox 
                                label={item.display}
                                onChange ={(input) => filterSelect("COLOR",input.checked,item)}
                                checked={filter.color.includes(item.color)}
                              />
                          </div>
                        ))
                      }
                  </div>

                  
                  
              </div>
              
              <div className="accessories__filter__widget">
                    <div className="accessories__filter__widget__content">
                        <Button onClick={clearFilter} size="sm">xoa bo loc</Button>
                    </div>
              </div>
          </div>
          <div className="accessories__filter__toggle">
            <Button size='sm' onClick={(() => showHideFilter())}>Bo loc</Button>
          </div>
          <div className="accessories__content">
            <InfinityList
              Data={products}
              catalog={false}
            ></InfinityList>            
          </div>
      </div>
    </Helmet>
  )
}



export default Accessories
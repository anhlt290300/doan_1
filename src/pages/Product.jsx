import React from 'react'
import Helmet from '../component/Helmet'
import productData from '../assets/fake-data/products'
import accessoriesData from '../assets/fake-data/bags'
import Section, {SectionBody,SectionTitle} from '../component/Section'
import Grid from '../component/Grid'
import ProductCard from '../component/ProductCard'
import ProductView from '../component/ProductView'
const Product = props => {
  const name = props.match.params.slug
  const name_key = props.match.url.slice(1,props.match.url.lastIndexOf('/')) === "catalog" ? "catalog" : "accessories"
 
  /* console.log(name_key)
  console.log(name) */
  const product = name_key ==="catalog" ? productData.getProductsBySlug(name) :  accessoriesData.getProductsBySlug(name)
  
  
  /* console.log(product) */
  const relatedProduct  = name_key ==="catalog" ? productData.getProducts(8) :  accessoriesData.getProducts(8) 
 
  React.useEffect(()=>{
    window.scrollTo(0,0)
  },[product])
  return (
    <div>
        <Helmet title= /* {product.title} */"a" >          
          <Section>
            <SectionBody>
                  <ProductView 
                    product={product}
                  />
            </SectionBody>
            <Section>
              <SectionTitle>
                  Kham pha them
              </SectionTitle>
              <SectionBody>
                  <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                  >
                    {
                      relatedProduct.map((item,index)=>(
                        <ProductCard
                            key={index}
                            img01={item.image01}
                            img02={item.image02}
                            name={item.title}
                            price={(item.price)}
                            slug={item.slug}
                        />                       
                      ))
                    }
                  </Grid>
              </SectionBody>
            </Section>
          </Section>
      </Helmet>
    </div>
  )
}



export default Product
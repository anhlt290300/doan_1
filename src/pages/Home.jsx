import React from 'react'
import Helmet from '../component/Helmet'
import HeroSlider from '../component/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section,{SectionTitle, SectionBody} from '../component/Section'
import PolicyCard from '../component/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../component/Grid.jsx'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import productData from '../assets/fake-data/products'
import ProductCard from '../component/ProductCard'

import banner from '../assets/images/banner.png'
const Home = () => {
  const Btnsearch = document.getElementById("btn-search")
  console.log(Btnsearch)
  /* Btnsearch.addEventListener('onMouseEnter', function(){
      Open_Search()
  }) */

  const Open_Search = ()=>{}
  return (
    <Helmet title='Trang Chủ'>
        <HeroSlider 
          data={heroSliderData}
          control={true}
          auto={false}
          timeOut={5000}
        />
        <Section>
            <SectionBody>
                <Grid
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
                >
                  {
                    policy.map((item,index)=> <Link key={index} to="/policy">
                          <PolicyCard                            
                            name={item.name}
                            description={item.description}
                            icon={item.icon}
                        
                        />
                    </Link>)
                  }
                </Grid>
                
            </SectionBody>
        </Section>

        <Section>
            <SectionTitle>
                  top san pham ban chay trong tuan
            </SectionTitle>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                      productData.getProducts(4).map((item,index)=>(
                        <ProductCard
                          key={index}
                          img01={item.image01}
                          img02={item.image02}
                          name={item.title}
                          price={(item.price)}
                          slug={item.slug}
                          catalog={true}
                        >

                        </ProductCard>
                      ))
                    }
                </Grid>
            </SectionBody>
        </Section>

        <Section>
            <SectionTitle>
                  San pham moi
            </SectionTitle>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                      productData.getProducts(8).map((item,index)=>(
                        <ProductCard
                          key={index}
                          img01={item.image01}
                          img02={item.image02}
                          name={item.title}
                          price={(item.price)}
                          slug={item.slug}
                          catalog={true}
                        >

                        </ProductCard>
                      ))
                    }
                </Grid>
            </SectionBody>
        </Section>

        <Section>
              <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt=""/>
                    </Link>
              </SectionBody>
        </Section>

        <Section>
            <SectionTitle>
                  Pho bien
            </SectionTitle>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                      productData.getProducts(4).map((item,index)=>(
                        <ProductCard
                          key={index}
                          img01={item.image01}
                          img02={item.image02}
                          name={item.title}
                          price={(item.price)}
                          slug={item.slug}
                          catalog={true}
                        >

                        </ProductCard>
                      ))
                    }
                </Grid>
            </SectionBody>
        </Section>
    </Helmet>
  )
}

export default Home
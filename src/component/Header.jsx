import { cleanup } from '@testing-library/react'
import React, { useEffect,useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'
import { hover,remove} from '../redux/product-modal/btnSearchSlide'
import { useDispatch,useSelector } from 'react-redux'
const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {

    const gotoHeader = ()=>{
        window.scrollTo(0,0)
      }
    const { pathname } = useLocation();
    /* console.log(pathname) */
    const activeNav = mainNav.findIndex(e=> e.path === pathname);

    const headerRef = React.useRef(null);

    const dispatch = useDispatch()

    const bool = useSelector((state)=>state.btnSearch.value)
    
    const searchRef = useRef(null)
    const btnRef = useRef(null)

    const Add_open = () =>{
        searchRef.current.classList.toggle("open");
        btnRef.current.classList.toggle("open")
    }   
    const onMouseEnter_ = () =>{
         Add_open();
         dispatch(hover());
    }

    const onMouseLeave_ = () =>{
        Add_open();
        dispatch(remove());
   }

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('shrink');
            }
            else{
                headerRef.current.classList.remove('shrink');
            }
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    }, [] );

    const menuLeft = useRef(null);
    const menuToggle = () => menuLeft.current.classList.toggle('active');
   return (
     <div className='header' ref={headerRef}>
         <div className='container'>
            <div className="header__logo">
                
                    <Link to="/" onClick={gotoHeader()}>
                        <img src={logo} alt=""/>
                    </Link>
                
            </div>
            <div className="header__menu">
                <div className="header__menu__mobile-toggle" ref={menuLeft} onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                </div>
                <div className="header__menu__left" ref={menuLeft}>    
                    <div className="header__menu__left__close" onClick={menuToggle}>
                        <i className='bx bxs-chevron-left' ></i>
                    </div>                
                    {
                        mainNav.map((item,index)=>(
                            <div key={index} className={`header__menu__item 
                            header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                            onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="header__menu__right">
                    <div className="header__menu__item header__menu__right__item"  
                                          
                         onMouseEnter={onMouseEnter_}  
                         onMouseLeave={onMouseLeave_}
                         >
                        <div className="header__menu__right__item__search" ref={searchRef} >
                            <input type="text" placeholder='tìm kiếm ngiu...' />
                            <button className="header__menu__right__item__search__box" ref={btnRef}>
                                <i className='bx bx-search-alt' ></i>
                            </button>
                        </div>
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <Link to="/cart">
                            <i className='bx bx-shopping-bag' ></i>
                        </Link>
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <Link to="/register">
                            <i className='bx bx-user' ></i>
                        </Link>
                    </div>
                </div>
            </div>
         </div>
     </div>
  )
}

export default Header
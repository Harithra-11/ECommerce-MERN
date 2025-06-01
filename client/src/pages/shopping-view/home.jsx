import { Button } from '@/components/ui/button';
import bannerOne from '../../assets/i1.jpg'
import bannerTwo from '../../assets/image1.jpg'
import bannerThree from '../../assets/image2.jpg'
import bannerFour from '../../assets/image3.jpg'
import bannerFive from '../../assets/image4.jpg'
import bannerSix from '../../assets/image5.jpg'
import bannerSeven from '../../assets/image6.jpg'
import { Accessibility, BabyIcon, ChevronLeftIcon, ChevronRightIcon, CloudLightning, Gauge, Shirt, ShirtIcon, ShowerHead, Torus, UmbrellaIcon, Watch, WatchIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredProducts } from '@/store/shop/products-slice';
import ShoppingProductTile from '@/components/shopping-view/product-tile';
import { useNavigate } from 'react-router-dom';
const categoriesWithIcon = [
    { id: "men", label: "Men", icon: ShirtIcon },
    { id: "women", label: "Women", icon: CloudLightning },
    { id: "kids", label: "Kids", icon: BabyIcon },
    { id: "accessories", label: "Accessories", icon: WatchIcon },
    { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];
const brandsWithIcon = [
    { id: "nike", label: "Nike", icon: Shirt },
    { id: "adidas", label: "Adidas", icon: Accessibility },
    { id: "puma", label: "Puma", icon: Watch },
    { id: "levi", label: "Levi's", icon: ShowerHead },
    { id: "zara", label: "Zara", icon: Torus },
    { id: "h&m", label: "H&M", icon: Gauge }
];

function ShoppingHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { productList } = useSelector(state => state.shopProducts)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const slides = [bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix, bannerSeven];

    function handleNavigateToListingPage(getCurrentItem,section){
        sessionStorage.removeItem('filters');
        const currentFilter={
            [section]:[getCurrentItem.id]
        }
        sessionStorage.setItem('filters',JSON.stringify(currentFilter))
        navigate('/shop/listing');
    }


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
        }, 5000);
        return () => clearInterval(timer)

    }, [])


    useEffect(() => {
        dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: 'price-lowtohigh' }))
    }, [dispatch])
    console.log(productList, "productList");






    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative w-full h-[600px] overflow-hidden">
                {
                    slides.map((slide, index) =>
                        <img
                            src={slide}
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}

                        />)


                }
                <Button variant="outline"
                    size="icon"
                    onClick={() => setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length)}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80">
                    <ChevronLeftIcon className='w-4 h-4' />
                </Button>
                <Button variant="outline"
                    size="icon"
                    onClick={() => setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)}

                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80">
                    <ChevronRightIcon className='w-4 h-4' />
                </Button>
            </div>
            <section className='py-12 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'> Shop By Category</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {
                            categoriesWithIcon.map(categoryItem => 
                            <Card 
                            onClick={()=>handleNavigateToListingPage(categoryItem,'category')} 
                            className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <categoryItem.icon className='w-12 h-12 mb-4 text-primary' />
                                    <span className='font-bold'>{categoryItem.label}

                                    </span>




                                </CardContent>

                            </Card>)
                        }

                    </div>

                </div>

            </section>



            <section className='py-12 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'> Shop By Brand</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                        {
                            brandsWithIcon.map(brandItem =>
                             <Card 
                             onClick={()=>handleNavigateToListingPage(brandItem,'brand')} 
                             className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <brandItem.icon className='w-12 h-12 mb-4 text-primary' />
                                    <span className='font-bold'>{brandItem.label}

                                    </span>




                                </CardContent>

                            </Card>)
                        }

                    </div>

                </div>

            </section>
            <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>
                        Feature Products
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                        {
                            productList && productList.length > 0 ?
                                productList.map(productItem =>
                                    <ShoppingProductTile product={productItem} />
                                ) : null
                        }

                    </div>
                </div>


            </section >


        </div>
    );
}
export default ShoppingHome;

import ProductCard from '../../../Components/Shared/ProductCard/ProductCard';
import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
import useProducts from '../../../Hooks/useProducts'

const Popular = () => {

    const products = useProducts();
    // console.log(products);

    return (
        <div className=''>
            <SectionTitle heading={'popular items'} subHeading={'Grab your products'}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {
                    products.filter(product => product.popularity === true)
                        .map(product => (
                            <ProductCard key={product._id} product={product}></ProductCard>
                        ))
                }
            </div>
        </div>
    );
};

export default Popular;
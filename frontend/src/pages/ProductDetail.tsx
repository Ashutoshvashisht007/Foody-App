import { useParams } from 'react-router-dom'; // If you need to access the ID
import PageLayout from '../components/layout/PageLayout';
import ProductSection from '../components/product/ProductSection';
import ProductNavbar from '../components/product/ProductNavbar';
import ProductSidebar from '../components/product/ProductSidbar';
import RelatedProducts from '../components/sections/RelatedProducts';
import type { NavbarData } from '../types/types';

const ProductDetail = () => {
  const { id } = useParams();

  const NavbarData: (NavbarData) = {
    name: "Product",
    main: "Home",
    page: "Product"
  }

  return (
    <PageLayout>
      <ProductNavbar NavbarData={NavbarData} />
      <div className="w-full max-w-[calc(100vw-180px)] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 hidden lg:block">
            <ProductSidebar />
          </div>
          <div className="lg:col-span-3">
            <ProductSection />
          </div>

        </div>
        <div className="mt-20">
          <RelatedProducts />
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
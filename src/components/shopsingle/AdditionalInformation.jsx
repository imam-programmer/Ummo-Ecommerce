import { useSelector } from "react-redux";

const productInfo = [
    {
        label: "Weight",

    },
    {
        label: "Dimensions",

    }, {
        label: "Stock",

    }, , {
        label: 'warrantyInformation',

    },

];

export default function AdditionalInformation() {
    const detailsProduct = useSelector((state) => state.clickProductDetails.Details)
    console.log(detailsProduct)
    return (
        <section className="w-full font-jost">
            <div className="overflow-hidden">

                <div

                    className={` border-gray-200 py-2 sm:grid-cols-[220px_1fr] `}
                >
                    {/* Label */}
                    <ul >
                        <li className={`flex justify-between py-2 border-b  border-gray-200 `}><span>Weight</span> <span>{detailsProduct.weight}</span> </li>
                        <li className={`flex justify-between py-2 border-b  border-gray-200 `}><span>Dimensions</span> <span>{`${detailsProduct.dimensions.width} x ${detailsProduct.dimensions.height} x ${detailsProduct.dimensions.depth} cm  `}</span></li>
                        <li className={`flex justify-between py-2 border-b  border-gray-200 `}><span>Stock</span> <span>{detailsProduct.stock}</span></li>
                         <li className={`flex justify-between py-2 border-b  border-gray-200 `}><span>warrantyInformation</span> <span>{detailsProduct.warrantyInformation}</span></li>
                    </ul>

                    {/* Value */}
                  
                </div>

            </div>
        </section>
    );
}

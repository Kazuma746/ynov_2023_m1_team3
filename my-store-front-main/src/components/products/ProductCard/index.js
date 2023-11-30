import Link from 'next/link';
import Image from 'next/image';

const Index = ({ product }) => {
    return (
        <div className="group/card max-w-sm bg-white rounded-lg">
            <Link className="group/thumbnail thumbnail" href={`/shop/${product.id}`}>
                <div className="overflow-hidden w-[300px] h-[300px] relative">
                    <Image
                        className="group-hover/thumbnail:opacity-100 group-hover/thumbnail:scale-105 transition ease-in-out delay-150"
                        alt={product.name}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.thumbnail}`}
                        fill
                        sizes="100%"
                        style={{ objectFit: "cover" }}
                    />
                    <Image
                        className="opacity-100 group-hover/thumbnail:scale-105 group-hover/thumbnail:opacity-0 transition ease-in-out delay-150"
                        alt={product.name}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.packshot}`}
                        fill
                        sizes="100%"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </Link>
            <div className="py-5">
                <h2 className="text-md mb-3">{product.name}</h2>
                <p className="font-semibold font-s">{product.price} €</p>
                <div className="opacity-0 group-hover/card:opacity-100 transition ease-in-out delay-150">
                    <Link className="transition ease-in-out delay-150 mt-4 inline-flex items-center px-4 py-3 text-sm border border-slate-500 font-medium text-center text-slate-500 bg-white hover:bg-slate-500 hover:text-white" href={`/shop/${product.id}`}>
                        Voir le produit
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Index;

import Link from 'next/link';

const Index = ({ current_page }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ul className="inline-flex items-center space-x-1 md:space-x-3 mb-8">
                <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4" />
                        </svg>
                        <Link href="/shop" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                            Shop
                        </Link>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="ml-1 text-sm font-semibold text-gray-900 md:ml-2 dark:text-gray-400">
                            {current_page}
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Index;

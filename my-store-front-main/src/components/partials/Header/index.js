import Link from 'next/link';
import NavMenu from "@/components/UI/NavMenu";
import menu from "@/data/menu.json";

const Index = () => {

    return (
        <header className="bg-white border-b border-color-black">
            <ul className="flex pl-6 pr-6 items-center justify-between">
                <li className="flex lg:flex-1">
                    <Link href="/">
                        <span className="font-semibold text-2xl font-bold">mystore.</span>
                    </Link>
                </li>
                <li>
                    <NavMenu menu={menu} color="grey" />
                </li>
            </ul>
        </header>
    );
}

export default Index;
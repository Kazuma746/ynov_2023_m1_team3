import TitlePage from "@/components/UI/TitlePage";

const Page = () => {
    return (
        <div className="container mx-auto">
            <TitlePage title="Contact us" />
            <div className="min-h-screen">
                <h2 className="text-2xl mb-4">Write us : </h2>
                <div className="mb-8">
                    <p>
                        <a className="border-b" href="mailto:contact@mystore.fr">
                            contact@mystore.fr
                        </a>
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl mb-4">Call us : </h2>
                    <p>
                        <a className="border-b" href="tel:0123232445">
                            01 23 23 24 45
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;

import Breadcumb from "@/components/layouts/back-end/breadcumb";
import Header from "@/components/layouts/back-end/header";

export default function Dashboard() {
    return (

        <div className="min-h-full">
            <Header />
            <Breadcumb title="Dashboard" />
            
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* <!-- Your content --> */}
                </div>
            </main>
        </div>

    )
}
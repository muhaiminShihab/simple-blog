import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <Header />

            <section className="pt-10 pb-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                        <div className="w-full lg:w-1/2">
                            <h2
                                className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                                We post beautiful contents about Coding.</h2>
                            <p className="text-lg text-gray-500 mb-7 text-center lg:text-left">
                                Stay up to date with us to get the latest content about coding world. We focus on PHP, Laravel, Livewire, Filament PHP, Vue.js & Tailwind CSS.
                            </p>
                            <Link href="#blog" className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">
                                Explore Contents
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                                <Image src="https://pagedone.io/asset/uploads/1696238644.png" alt="#"
                                    className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" width={100} height={100} />
                                <Image src="https://pagedone.io/asset/uploads/1696238665.png" alt="#"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" width={100} height={100} />
                                <Image src="https://pagedone.io/asset/uploads/1696238684.png" alt="#"
                                    className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" width={100} height={100} />
                                <Image src="https://pagedone.io/asset/uploads/1696238702.png" alt="#"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" width={100} height={100} />
                                <Image src="https://pagedone.io/asset/uploads/1696238720.png" alt="#"
                                    className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" width={100} height={100} />
                                <Image src="https://pagedone.io/asset/uploads/1696238737.png" alt="#"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" width={100} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24" id="blog">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest blog</h2>
                    <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div className="flex items-center">
                                <Image src="https://pagedone.io/asset/uploads/1696244317.png" alt="#" className="rounded-t-2xl w-full" width={100} height={100} />
                            </div>
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                <span className="text-indigo-600 font-medium mb-3 block">Jan 01, 2023</span>
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">Clever ways to invest in product to organize your portfolio</h4>
                                <p className="text-gray-500 leading-6 mb-10">Discover smart investment strategies to streamline and organize your portfolio..</p>
                                <Link href="/blog/1" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</Link>
                            </div>
                        </div>
                        <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div className="flex items-center">
                                <Image src="https://pagedone.io/asset/uploads/1696244340.png" alt="#" className="rounded-t-2xl w-full" width={100} height={100} />
                            </div>
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                <span className="text-indigo-600 font-medium mb-3 block">Feb 01, 2023</span>
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">How to grow your profit through systematic investment with us</h4>
                                <p className="text-gray-500 leading-6 mb-10">Unlock the power of systematic investment with us and watch your profits soar. Our..</p>
                                <Link href="/blog/2" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</Link>
                            </div>
                        </div>
                        <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div className="flex items-center">
                                <Image src="https://pagedone.io/asset/uploads/1696244356.png" alt="#" className="rounded-t-2xl w-full" width={100} height={100} />
                            </div>
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                <span className="text-indigo-600 font-medium mb-3 block">Mar 01, 2023</span>
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">How to analyze every holdings of your portfolio</h4>
                                <p className="text-gray-500 leading-6 mb-10">Our comprehensive guide will equip you with the tools and insights needed to..</p>
                                <Link href="/blog/3" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
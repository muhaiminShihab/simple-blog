import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabindex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link href={"#"}>Item 1</Link></li>
                                <li><Link href={"#"}>Item 2</Link></li>
                                <li><Link href={"#"}>Item 3</Link></li>
                            </ul>
                        </div>
                        <Link href={"/"} className="btn btn-ghost text-xl hover:bg-transparent font-bold">Simple Blog</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href={"#"}>Item 1</Link></li>
                            <li><Link href={"#"}>Item 2</Link></li>
                            <li><Link href={"#"}>Item 3</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn">Subscription</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="my-20 text-base">
            <div className="container">
                <ul className="flex mb-4">
                    <li className="mr-8">
                        <Link href="/" className="text-white text-lg">
                            Index
                        </Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/resume" className="text-white text-lg">
                            Resume
                        </Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/reviews" className="text-white text-lg">
                            Reviews
                        </Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/contact" className="text-white text-lg">
                            Contact
                        </Link>
                    </li>
                </ul>
                <span className="text-[#788491]">
          Copyright &copy; {new Date().getFullYear()} Owen Bick. All Rights
          Reserved. Made with ❤️ and ☕ in Dallas.
        </span>
            </div>
        </footer>
    );
}
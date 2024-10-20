import { LinkProps } from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import {Link} from "@/navigation";

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex text-lg font-bold space-x-6">
                {/*<li>
                    <Link href="/" className="text-white hover:text-blue-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:text-blue-300">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/events" className="text-white hover:text-blue-300">
                        Events
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white hover:text-blue-300">
                        Contact
                    </Link>
                </li>*/}
                <li>
                    <LocaleSwitcher/>
                </li>
            </ul>
        </nav>
    );
};
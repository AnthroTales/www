// import { LinkProps } from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
// import {Link} from "@/navigation";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex text-lg font-bold space-x-6">
        <li>
          <LocaleSwitcher />
        </li>
      </ul>
    </nav>
  );
};

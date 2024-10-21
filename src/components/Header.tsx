import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <header className="text-white relative z-20">
            <div className="ml-auto flex lg:pb-0 pb-4 pt-6 pl-6 pr-6 justify-center lg:justify-end">
                <Navbar />
            </div>
        </header>
    );
};
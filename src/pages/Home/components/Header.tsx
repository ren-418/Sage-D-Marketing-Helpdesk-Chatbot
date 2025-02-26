import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [activePage, setActivePage] = useState<string>("home");
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [scrolling, setScrolling] = useState<boolean>(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

    const handleMouseEnter = (dropdown: string) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    const setActive = (page: string) => {
        setActivePage(page);
    };

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
        setMobileSubmenu(null);
    };

    const openMobileSubmenu = (submenu: string) => {
        setMobileSubmenu(submenu);
    };

    const closeMobileSubmenu = () => {
        setMobileSubmenu(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); 
        };
    }, []);

    const menuItems = [
        {
            name: "Home",
            key: "home",
            link: "/",
            submenu: null,
        },
        {
            name: "About",
            key: "pages",
            link: "#",
            submenu: [
                { name: "What We Do", link: "#" },
                { name: "Leadership", link: "#" },
                { name: "Contact", link: "#" },
            ],
        },
        {
            name: "Solutions",
            key: "services",
            link: "#",
            submenu: [
                { name: "EV Charging Solutions", link: "#" },
                { name: "Electrification Solutions", link: "#" },
                { name: "Efficiency Solutions", link: "#" },
                { name: "Construction Services", link: "#" },
            ],
        },
        {
            name: "Sectors",
            key: "portfolio",
            link: "#",
            submenu: [
                { name: "Sectors", link: "#" },
                { name: "Case Studies", link: "#" },
            ],
        },
        {
            name: "Programs",
            key: "blog",
            link: "#",
            submenu: [
                { name: "Blog Standard", link: "#" },
                { name: "Grid Layouts", link: "#" },
                { name: "Blog List", link: "#" },
                { name: "Blog Single", link: "#" },
            ],
        },
        {
            name: "Careers",
            key: "contact",
            link: "#",
            submenu: null,
        },
    ];

    return (
        <header className={`transition-all duration-300 ease-in-out z-[30] fixed top-0 w-full  ${scrolling && !isHamburgerOpen ? "bg-white shadow-lg fixed top-0 w-full" : ""} ${isHamburgerOpen ? "w-full h-[100%] bg-[#38383b] flex flex-col gap-[5%] overflow-hidden fixed top-0 text-white" : ""}`}>
            <div className={`relative top-0 left-0 px-[5.5%] py-[40px] flex flex-row justify-between w-full items-center underline-bottom-white max-[870px]:py-[20px] ${scrolling ? "py-[10px]" : ""}`}>
                <div>
                    <Link to="/">
                        <img src="" width={160} height={63} alt="logo" />
                    </Link>
                </div>
                <div className="flex flex-row gap-[2.7%] justify-end items-center w-full max-[870px]:hidden">
                    <ul className={`header-before-event flex flex-row gap-[35px] font-poppins font-bold uppercase justify-between items-center flex-nowrap ${scrolling && !isHamburgerOpen ? "text-black" : "text-white"}`}>
                        {menuItems.map((item) => (
                            <li
                                key={item.key}
                                className={`header-list-event cursor-pointer relative hover:text-[#549F57] ${activePage === item.key ? "active" : ""}`}
                                onClick={() => setActive(item.key)}
                                onMouseEnter={() => item.submenu && handleMouseEnter(item.key)}
                                onMouseLeave={() => item.submenu && handleMouseLeave()}>
                                <Link to={item.link}
                                    onClick={(e) => { if (item.submenu) e.preventDefault(); }}>
                                    {item.name}
                                </Link>
                                <span className="underline-effect" />
                                {item.submenu && openDropdown === item.key && (
                                    <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                                        <ul className="py-2">
                                            {item.submenu.map((subItem, index) => (
                                                <li key={index}>
                                                    <Link to={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>

                        ))}
                    </ul>
                </div>

                <div className="relative hidden items-center justify-center w-[35px] h-[35px] max-[870px]:flex cursor-pointer z-50"
                    onClick={toggleHamburger}
                    aria-label="Toggle menu"
                    role="button"
                    aria-expanded={isHamburgerOpen}
                >
                    <div className="w-full h-full relative">
                        <div className={`top-bun absolute h-1 bg-gray-700 transition-transform duration-300 ${isHamburgerOpen ? "top-ham-active" : "translate-y-[-5px] rotate-0"}`}></div>
                        <div className={`patty absolute h-1 bg-gray-700 transition-opacity duration-300 ${isHamburgerOpen ? "opacity-0" : "opacity-100"}`}></div>
                        <div className={`bottom-bun absolute h-1 bg-gray-700 transition-transform duration-300 ${isHamburgerOpen ? "bot-ham-active" : "translate-y-[5px] rotate-0"}`}></div>
                    </div>
                </div>
            </div>

            {isHamburgerOpen && (
                <div className="flex flex-col gap-[5%] w-full h-full">
                    {!mobileSubmenu && (
                        <ul className={`header-before-event flex flex-col gap-[5px] font-poppins font-bold uppercase justify-center items-center responsive-header-font ${scrolling && !isHamburgerOpen ? "text-black" : "text-white"}`}>
                            {menuItems.map((item) => (
                                <li key={item.key} className={`cursor-pointer relative hover:text-[#549F57] ${activePage === item.key ? "active" : ""}`}
                                    onClick={() => item.submenu ? openMobileSubmenu(item.key) : setActive(item.key)}>
                                    <Link to={item.link}
                                        onClick={(e) => { if (item.submenu) e.preventDefault(); }}
                                        className="w-full text-center"
                                    >
                                        {item.name}
                                    </Link>
                                    <span className="chevron"></span>
                                    <span className="underline-effect" />
                                </li>
                            ))}
                        </ul>
                    )}

                    {mobileSubmenu && (
                        <div className="flex flex-col gap-[1%] w-full h-full">
                            <div onClick={closeMobileSubmenu} className="self-center px-4 py-2 text-[#f7f7f7] responsive-header-font cursor-pointer">
                                <span className="chevorn-left"></span> Back
                            </div>

                            <ul className={`header-before-event flex flex-col gap-[10px] font-poppins font-bold uppercase justify-center items-center responsive-header-font ${scrolling && !isHamburgerOpen ? "text-black" : "text-white"}`}>
                                {menuItems
                                    .find((item) => item.key === mobileSubmenu)
                                    ?.submenu?.map((subItem, index) => (
                                        <li key={index} className="cursor-pointer relative hover:text-[#549F57]">
                                            <Link to={subItem.link} className="w-full text-center flex justify-center items-center">
                                                {subItem.name}
                                            </Link>
                                            <span className="underline-effect" />
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}

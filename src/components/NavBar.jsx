import { useState } from "react";
import burgerBefore from "../assets/icons/hamburger-before.svg";
import burgerAfter from "../assets/icons/hamburger-after.svg";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [hovered, setHovered] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const menuItems = ["About Me", "Projects", "Skills & Tools", "Education", "Contact"];
    const burgerIcon = menuOpen || hovered ? burgerAfter : burgerBefore;

    return (
    // Main navigation bar
    <header className="bg-[rgb(208,57,112)] w-full h-16 flex justify-between items-center px-2">

        {/* The website name */}
        <h1 className="whitespace-nowrap text-[rgb(255,252,242)] text-[20px] sm:text-[24px] lg:text-main-full font-brand font-bold pl-15 md:pl-23 lg:pl-37.5 pr-5">
        sherlin ticsay
        </h1>

        {/* Navigation buttons for website sections */}
        <nav className="flex items-center pr-4 md:pr-10 lg:pr-40 h-full gap-6">
            <div className="hidden lg:flex h-full p-0 gap-6">
                {menuItems.map((item) => (
                    <button key={item} className={`whitespace-nowrap text-[rgb(255,252,242)] text-[18px] transition-colors duration-200 h-full p-4 ${activeSection === item ? "text-[rgb(208,57,112)] bg-[rgb(255,252,242)]" : "text-[rgb(255,252,242)] bg-transparent hover:text-[rgb(204,152,171)]"}`}
                        onClick={() => setActiveSection(item)}>
                        {item}
                    </button>
                    ))
                }
            </div> 
            
            {/* Hambuger menu for tablet and phone screens */}
            <div className={`relative lg:hidden flex flex-col rounded-t ${menuOpen ? "bg-[rgb(255,252,242)] flex w-64" : "bg-transparent"}`}>
                <button 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`lg:hidden bg-transparent rounded p-2 transition-colors duration-200 
                    ${menuOpen ? "w-64  flex items-center justify-end rounded-t pr-4 pt-4" : "bg-transparent"}
                    ${hovered ? "bg-[rgb(255,252,242)]" : "bg-transparent"}`
                } 
                onClick={() => {
                    toggleMenu();
                    setActiveSection("");
                }}>
                    <img
                    src={burgerIcon}
                    alt="Menu Icon"
                    className="w-7 h-4 transition-all duration-200"
                    />
                </button>

            {menuOpen && (
                <div className="absolute top-10 right-0 w-64 bg-[rgb(255,252,242)] flex flex-col">
                    {menuItems.map((item) => (
                        <button 
                            key={item} 
                            onClick={() => {
                                setActiveSection(item);
                                setMenuOpen(false);
                            }}
                            className={`w-full text-right px-6 py-4 text-[18px] transition-colors duration-200 
                                ${activeSection === item 
                                    ? "bg-[rgb(208,57,112)] text-white" 
                                    : "text-[rgb(208,57,112)] hover:bg-[rgba(208,57,112,0.05)]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                )
            }   

            </div>
        </nav> 
    </header>
    );
};

export default NavBar;
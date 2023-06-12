import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef(null);

    useEffect(() => {
        const handler = (ev) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(ev.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                key={option.value}
                onClick={() => handleOptionClick(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between item-center cursor-pointer"
                onClick={handleClick}>{value?.label || 'Select...'}
                <span className="text-lg" >{isOpen ? <GoChevronUp /> : <GoChevronDown />}</span>
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    );
}

export default Dropdown;
interface ButtonProps {
    onClick: () => void;
    text: string;
}

const Button = ({onClick, text} :ButtonProps) => {
    return (
        <button
            className="px-4 py-2 text-white rounded hover:bg-purple-950 transition duration-150 ease-in-out"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
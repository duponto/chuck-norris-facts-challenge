interface TextAreaProps {
    value: string;
    isReadOnly: boolean;
    placeholder?: string;
}

const TextArea = ({ value, isReadOnly, placeholder} : TextAreaProps) => {
    return (
        <textarea
          className="mb-4 w-1/2 border border-gray-300 rounded"
          value={value}
          readOnly={isReadOnly}
          placeholder={placeholder}
        ></textarea>
    );
}

export default TextArea;
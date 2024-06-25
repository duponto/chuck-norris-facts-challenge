interface TextAreaProps {
    value: string;
    isReadOnly: boolean;
}

const TextArea = ({ value, isReadOnly} : TextAreaProps) => {
    return (
        <textarea
          className="mb-4 w-1/2 p-2 border border-gray-300 rounded"
          value={value}
          readOnly={isReadOnly}
        ></textarea>
    );
}

export default TextArea;
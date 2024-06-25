import Button from "../Button";

interface JokeCategoriesRowProps {
    onClickEvent: any;
}

const JokeCategoriesRow = ({onClickEvent} : JokeCategoriesRowProps) => {
    const categories = ["animal", "career", "celebrity", "dev", "explicit", 
        "fashion", "food", "history", "money", "movie", "music", 
        "political", "religion", "science", "sport", "travel"];

    return (
        <div className="flex flex-wrap space-x-4 mb-4">
            {categories.map((category: any) => {
                const categoryCapitalized = category.charAt(0).toUpperCase()
                + category.slice(1)
                return <Button key={category} text={categoryCapitalized} onClick={() => onClickEvent(category)} />
            })}
        </div>
    );
}

export default JokeCategoriesRow
import { useGetJokesCategories } from "../../hooks/ApiRequests";


const JokeCategoriesRow = () => {
    const categories = useGetJokesCategories();
    
    return (
        <div>
            {categories.map((category: any) => (
                <JokeCategory key={category} category={category} />
            ))}
        </div>
    );
    }
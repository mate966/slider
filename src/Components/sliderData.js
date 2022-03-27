import { useState, useEffect } from "react";

const urls = [
    "https://api.github.com/users/gaearon",
    "https://api.github.com/users/acdlite",
    "https://api.github.com/users/yyx990803",
    "https://api.github.com/users/unclebob",
    "https://api.github.com/users/martinfowler",
];

export const GetData = () => {
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        let requests = urls.map(url =>
            fetch(`https://api.github.com/users/${url.split("/")[4]}`)
        );
        Promise.all(requests)
            .then(responses => {
                return Promise.all(responses.map(response => response.json()));
            })
            .then(res => setContent(res))
            .catch(err => setError(err))
            .finally(setIsLoading(false));
    }, []);
    return { content, isLoading, error };
};

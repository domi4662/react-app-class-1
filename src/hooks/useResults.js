import { useEffect, useState } from 'react';
import git from '../api/git';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async username => {
        try {
            const response = await git.get(`/${username}/repos`);
            setResults(response.data);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component
    useEffect(() => {
        searchApi('domi4662').then(r => console.log("SUCESS API CALL"));
    }, []);

    return [searchApi, results, errorMessage];
};

import useSWR from 'swr';
import { useRef } from 'react';

const useGetQuestions = () => {
    const wasFetchedRef = useRef(false);

    const fetchQuestions = async (num) => {
        wasFetchedRef.current = true;

        const result = await fetch(`https://opentdb.com/api.php?amount=${num}`);

        return await result.json();
    };

    const { data, error, isValidating, mutate } = useSWR(
        'questions',
        fetchQuestions,
        {
            revalidateOnMount: false,
            revalidateOnFocus: false,
        }
    );

    const refetch = async (num) => {
        const result = await fetchQuestions(num);

        await mutate(result, false);
    };

    return {
        wasFetched: wasFetchedRef.current,
        refetch,
        data,
        error,
        isValidating,
    };
};

export default useGetQuestions;

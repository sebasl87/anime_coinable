export const fetchAnimes = async (page: number) => {
    return fetch(`${process.env.NEXT_PUBLIC_JIKAN_SERVICE}/top/anime?filter=favorite&limit=9&page=${page}`, {
        method: 'GET',
    }).then(response => response.json());
};

export const fetchSearchAnimes = async (valueToSearch: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_JIKAN_SERVICE}/anime?letter=${valueToSearch}&limit=5`, {
        method: 'GET',
    }).then(response => response.json());
};
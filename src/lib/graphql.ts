import { GraphQLClient } from 'graphql-request';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchHygraphData = async <T>(query: string, variables: Record<string, any> = {}): Promise<T> => {
    const hygraphClient = new GraphQLClient(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_TOKEN}`,
        },
    });
    return hygraphClient.request<T>(query, variables);
};

export { fetchHygraphData };
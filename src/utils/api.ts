import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export  const fetchData = async (url: string, options = {}) => {
    try {
        const response = await axiosInstance.get(url, options);
        return response.data;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw error;
    }
};


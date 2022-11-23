import axios from 'axios';

const BASE_URL = 'https://main-bvxea6i-ygdkc77zpiyps.us-2.platformsh.site';

export const userLogin = async (credentials) => {
    try {
        const url = BASE_URL + '/login';
        const response = await axios.post(url, credentials);
        return response;
    } catch (error) {
        const response = error.response;
        const { status } = response;

        if (status === 401) {
            throw new Error("You can't access to your account. Validate your credentials.");
        }

        throw new Error('There was an error processing your request.');
    }
};

export const userWallet = async (token) => {
    try {
        const url = BASE_URL + '/wallet';
        const response = await axios.get(url);
        console.log(response);
    } catch (error) {
        const response = error.response;
        const { status } = response;

        if (status === 401) {
            throw new Error('Your session has expired. Log in again.');
        }

        throw new Error('There was an error processing your request.');
    }
};

import axios from 'axios';

const LOGIN_ENDPOINT = 'https://main-bvxea6i-ygdkc77zpiyps.us-2.platformsh.site/login';

export const login = async (credentials) => {
    try {
        const response = await axios.post(LOGIN_ENDPOINT, credentials);
        console.log(response);
    } catch (error) {
        throw new Error("You can't access to your account. Validate your credentials.");
    }
};

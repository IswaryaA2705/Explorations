import axios from "axios"
async function fetchUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        console.log('Users fetched successfully:', response.data);
    } catch (error) {
        console.error('Failed to fetch users:', error.message);
    }
}

fetchUsers();
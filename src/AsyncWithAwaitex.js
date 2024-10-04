import axios from "axios"
async function fetchUsers() {
    try {
        // Await the axios request and store the result in response
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        // Log the data once it's fetched successfully
        console.log('Users fetched successfully:', response.data);
    } catch (error) {
        // Handle errors here
        console.error('Failed to fetch users:', error.message);
    }
}

// Call the async function to fetch the data
fetchUsers();
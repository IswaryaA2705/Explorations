function fetchUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    reject(`Error: ${response.status}`);
                }
                return response.json(); 
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(`Network Error: ${error}`);
            });
    });
}

fetchUsers()
    .then((users) => {
        console.log("Users fetched successfully:", users);
    })
    .catch((error) => {
        console.error("Failed to fetch users:", error);
    });

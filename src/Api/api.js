export const fetchUsers = () => {
    return fetch('https://649092531e6aa71680cb7e43.mockapi.io/api/user')
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
  
  export const fetchUserById = (userId) => {
    return fetch(`https://649092531e6aa71680cb7e43.mockapi.io/api/user/${userId}`)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
  
  export const createUser = (userData) => {
    return fetch('https://649092531e6aa71680cb7e43.mockapi.io/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
  
  export const updateUser = (userId, userData) => {
    return fetch(`https://649092531e6aa71680cb7e43.mockapi.io/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
  
  export const deleteUser = (userId) => {
    return fetch(`https://649092531e6aa71680cb7e43.mockapi.io/api/user/${userId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
  
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  
  // const toggleUserState = (allUsers, userName) => {

  //   const promise = new Promise((resolve) => {
  //     const updatedUsers = allUsers.map(user =>
  //       user.name === userName ? { ...user, active: !user.active } : user,
  //   )
  //      resolve(updatedUsers)
  //     });
  
  //  return promise;
  // };

  // const toggleUserState = (allUsers, userName) => {
  //   const updatedUsers = allUsers.map(user =>
  //     user.name === userName ? { ...user, active: !user.active } : user,
  //   );
  
  //  return Promise.resolve(updatedUsers);
  // };

  const toggleUserState = async(allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
 return updatedUsers;
  };
  
  
  const logger = updatedUsers => console.table(updatedUsers);
  

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

let users = [
    {
        id:1,
        name:"dhiva",
        email:"dhiva123@gmail.com",
        password:"123456789",
        
    },
    { 
        id:2,
        name:"bala",
        email:"bala123@gmail.com",
        password:"12345",
        
    }
]

export const GetUser = (req , res) => {
   
    res.status(200).json({
    success:true,
    data:users
   })
   
}

export const GetUserById = (req , res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => (user.id === id));

  if(!user){
    return res.status(404).json({
        success:false,
        message:"User not found"
    })
  }

  res.status(200).json({
    success:true,
    data:user
  })
}

export const addUser = (req , res) => {
    const {name , email , password } = req.body;
    const newUser = {
        id:users.length + 1,
        name,
        email,
        password
    }
    users.push(newUser);
    res.status(201).json({
        success:true,
        message:"User created Successfully"
    })

}

export const updateUserById = (req , res) => {
  const id = Number(req.params.id);
  const {name , email , password} = req.body

  const user = users.find((user) => (user.id === id));
   user.name = name
   user.email = email
   user.password = password

   res.status(200).json({
    success:true,
    message:"User Updated Successfully",
    data:user
   });



}

export const deleteUserById = (req , res) => {
  const id = Number(req.params.id);
   users = users.filter((user) => (user.id!==id));
   res.status(200).json({
    success:true,
    message:"User Deleted Successfully"
   })
}


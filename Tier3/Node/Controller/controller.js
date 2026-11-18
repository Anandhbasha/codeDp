export const read = (req,res)=>{
    res.status(200).send("NodeJs is Working")
}
export const insert = (req,res)=>{
    const {userName,password} = req.body
    res.status(200).json(`The ${userName} and ${password}`)
}

export const update = (req,res)=>{
    const {id} = req.params
    const {userName,email} = req.body
    res.status(200).json("User updated sucessfully",userName)
}

export const deleteUser = (req,res)=>{
    const {id} = req.params
    res.status(201).json("User Deleted sucessfully",id)
}
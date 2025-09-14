import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(req, res) {
  try {
    const { name, email, age } = req.body;
    const user = await prisma.users.create({
      data: { name, email, age: Number(age) },
    });
    res.json({ message: "Berhasil menambahkan data", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllUser(req, res) {
  try {
    const user = await prisma.users.findMany();
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.users.findUnique({
      where: { id_user: Number(id) },
    });
    res.json(user);
    if (!user){
            res.status(404).json({message: 'data tidak ditemukan'})
        }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUser = async (req, res) =>{
    try {
        const {name, email, age} = req.body
        const {id} = req.params
        const users = await prisma.users.update(
            {
                data: {name, email, age},
                where: {id_user: Number(id)} 
            }
        )
        res.json(users)
        if (!users){
            res.status(404).json({message: 'data tidak ditemukan'})
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    const user = await prisma.users.delete({
      where: {id_user: Number(id)}
    })
    res.json({message: 'delete user successfully', user})
    if (!user){
      res.status(404).json({message: "data tidak ditemukan"})
    }
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

import { Request, Response } from "express";
import { User, UserInstance } from "../model/Users";

export const homeController = async (req: Request, res: Response) => {
    let users = await User.findAll();


    let showUsers: boolean = false;
    
    if (users.length >= 0) {
        showUsers = true;
    } else {
        showUsers = false
    }

    
    res.render('home', {
        users,
        showUsers,
    })
}

export const CreateUser = async (req: Request, res: Response) => {
    let { username, useremail } = req.body;
    try {
        const addNewUser = User.build({
            name: username,
            email: useremail
        });

        await addNewUser.save()
    }
    catch (e) {
        console.log('We got an Error: ', e)
    }

    res.redirect('/')
}


export const UpdateUser = async (req: Request, res: Response) => {


    res.redirect('/')
}

export const DeleteUser = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    
    await User.destroy({
        where: { id }
    })

    res.redirect('/')
}
const serviceUser = require('../services/user.serviceCRUD');
const User = require('../models/models.mysql')

const handleGetAllUser = async (req, res) => {
    try {
        let data = [];
        let id = req.params.id;
        if (!id) {
            return res.status(200).json({
                errcode: 1,
                message: "ID not null",
            });
        } else {
            data = await serviceUser.getAllUser(id);
            if (data) {
                console.log(data);

                return res.status(200).json(data);
            } else {
                console.log("data null")
            }

        }

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errcode: 1,
            message: "request connection failed",
        });
    }
}
let handleAddUser = async (req, res) => {
    try {
        let body = req.body;
        if (body) {
          let data=   await serviceUser.addUser(body);
          return res.status(200).json(data)

        } else {
            return res.status(200).json({
                errcode: 1,
                message: "ID not null",
            });
        }
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errcode: 1,
            message: "request connection failed",
        });
    }

}

let handleDeleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            return res.status(200).json({
                errcode: 1,
                message: "ID not null",
            });
            
        } else {
           let data =  await serviceUser.deleteUser(id);
            return res.status(200).json(data);
        }
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errcode: 1,
            message: "request connection failed",
        });
    }
} 
let handleUpdateUser = async (req, res) => {
    try {
        let body = req.body;
        if (body) {
            let data = await serviceUser.UpdateUser(body);
            return res.status(200).json(data);
        } else {
            return res.status(200).json({
                errcode: 1,
                message: "ID not null",
            });
        }
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errcode: 1,
            message: "request connection failed",
        });
    }
}
module.exports = {
    handleGetAllUser: handleGetAllUser,
    handleAddUser: handleAddUser,
    handleDeleteUser: handleDeleteUser,
    handleUpdateUser:handleUpdateUser
}
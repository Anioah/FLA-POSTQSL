'use strict'

const User = use('App/Models/User');
const LaravelTable = use('App/Models/LaravelTable');

class UserController {
    async newUser({ request, response, auth }) {
        try {
            const data = await request.all();
            const user = new User();

            user.username = data.username;
            user.email = data.email;
            user.password = data.password;

            if (await user.save()) {
                return response.status(200).json(user);
            }
        } catch (error) {
            return response.status(500).json({ message: "No se pudo realizar la operación exitosamente" });
        }
    }

    async getAllUsersUsername({ response }) {
        try {
            const users = await User.query().select('username as usuario').fetch();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).json({ message: "No se pudo realizar la operación exitosamente" });
        }
    }

    async updateUser({ request, response }) {
        try {
            const data = await request.all();
            const newUser = await User.findBy('id', data.id);

            newUser.username = data.username;
            newUser.email = data.email;
            newUser.password = data.password;


            if (await newUser.save()) {
                return response.status(200).json({ message: "el usuario ha cambiado correctamente" });
            }
        } catch (error) {
            return response.status(500).json({ message: "No se pudo realizar la operación exitosamente" });
        }
    }

    async deleteUser({ request, response }) {
        try {
            const data = await request.all();
            const user = await User.findBy('id', data.id);

            if (await user.delete()) {
                return response.status(200).json({ message: "Usuario eliminado correctamente" });
            }

        } catch (error) {
            return response.status(500).json({ message: "No se pudo realizar la operación exitosamente" });
        }
    }

    async insertInLaravel({ request, response }) {
        try {
            const data = await request.all();
            const laravelTable = new LaravelTable();

            laravelTable.descripcion = data.descripcion;
            laravelTable.numero = data.numero;

            if (await laravelTable.save()) {
                return response.status(200).json({ message: "Operación realizada correctamente" });
            }
        } catch (error) {
            return response.status(500).json({ message: "No se pudo realizar la operación exitosamente" });
        }
    }
}

module.exports = UserController
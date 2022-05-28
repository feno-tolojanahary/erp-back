import User from "../models/User";

class UserService {
    public user = User;

    public async createUser(userData: User): Promise<User> {
        const createdUser: User = await this.user.create(userData);
        return createdUser;
    }

    public async findAllUser(): Promise<User[]> {
        const allUsers: User[] = await this.user.findAll();
        return allUsers;
    }
}

export default UserService;
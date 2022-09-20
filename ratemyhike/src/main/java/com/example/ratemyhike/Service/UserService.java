package com.example.ratemyhike.Service;

import com.example.ratemyhike.Exceptions.UserWithIdDoesntExist;
import com.example.ratemyhike.Exceptions.UserWithUsernameDoesntExist;
import com.example.ratemyhike.Model.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(long id) throws UserWithIdDoesntExist;

    User getUserByName(String name) throws UserWithUsernameDoesntExist;
}

# Utopia_tech_task1 

Description:
Your task is to implement Signup and login with JWT (Access and Refresh tokens)

1. User can signup new account with personal login & password
2. User can login with personal login & password, server returns response with Access token and Refresh to-
ken.
3. Refresh token helps to get new pair Access token – User now should use valid Access token to access resources.
 When the Access token is expired, user can't use it anymore. Validity of Access Token is 120 seconds.
5. Delete user API for delete user from system.
6. Refresh token helps to get new pair Access token.
7. Stored all relevant details in MongoDB.
8. Basic System design principles should be considered in implementation such as same Email is not allowed
twice for signup.
9. Task should be implemented in Typescript.

Solution:
1. The app contains 6 urls each deployed on local host port 5000 as of now.
2. The routes are as follows:
   
      -  'users/validate' : to get the access token
      -  'users/register' : to register the user
      -  'users/login' : to login the user
      -  '/get/all' : to get all users in a database
      - '/deleteuser' : delete a particular user
3. As soon as the 'server.ts' file is run, we get the message of server started and mongodb connected as shown below.
   ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/2ea7d769-5e78-4ed2-bc75-946ba84d9158)
4. As of now database is empty, get/all gives empty list of users.
   ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/78896b73-6a55-4923-834c-1a5a35c112bb)
5. Now, we register two new users. User was registered succesfully.
   ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/d4b873c6-7beb-4a81-9033-3b122ba935dd)
6. If the user exists previously, the api won't accept the user into the database. Also, if the number of characters in the password is less that 8, the api won't accept the user.
   ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/73a24d5b-e344-435c-8dfb-9954c121ab84)
   ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/3eebcb4a-ada6-41d4-a34f-7e05d842cb5e)
7. Now, registering a new user and looking at the database.
   ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/8487d741-6e05-4794-9915-a96106a987bf)
   A new user was registered into the database and only the hashed password is visibel with number of users as 2.
8. Now, when we click on login we can see, there is a token created for the user.
  ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/19bae07c-cb73-4849-b365-5118b6084f1b)
9. Without token, the user is unauthorised.
   ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/d686f35f-01fd-46d9-92f9-79a91e7f4a58)
10. When the token is added, the user is authorised.
    ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/67b814eb-faab-44df-b5fa-645cd7f74f03)
11. Lastly, we can also delete a user.

    ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/82a9f252-adb4-4a35-a623-421705d34045)
13. Only one user exists, since the earlier user was deleted.
    ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/be415663-65ae-4e61-9ffe-cdbcfe6bdcb5)
14. Snapshot of the Mongodb database.
    ![image](https://github.com/sruShiva/Utopia_task1/assets/91767610/2fd8d56f-5744-40ae-a4c2-3c8aeed8f8c1)
15. The entire project is implemented in Typescript.
16. Get all users is an addition to the exisiting system for the user.









   


   

   


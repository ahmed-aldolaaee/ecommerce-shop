const bcrypt = require('bcryptjs');

const Users = [
    {
        name: 'Admin',
        password: bcrypt.hashSync('123456', 10),
        email: 'admin@example.com',
        isAdmin: true
    },
    {
        name: 'John Doe',
        password: bcrypt.hashSync('123456', 10),
        email: 'john@example.com'
    },
    {
        name: 'Admin',
        password: bcrypt.hashSync('123456', 10),
        email: 'jane@example.com'
    }
];

module.exports = Users;
// SignUpConfig.js
const signUpConfig = {
  header: 'Create a new account',
  signUpFields: [
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'text',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'email',
    },
    {
      label: 'Gender',
      key: 'gender', // Standard attribute
      required: true,
      displayOrder: 5,
      type: 'string',
    },
    {
      label: 'Birthdate',
      key: 'birthdate',
      required: true,
      displayOrder: 6,
      type: 'date', // Ensure the type is set to 'date'
    },
    // ... any other fields you need
  ],
};

export default signUpConfig;

  
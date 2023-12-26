// SignUpConfig.js
export const signUpConfig = {
    header: 'Sign Up for My App',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      { label: 'Username', key: 'username', required: true, displayOrder: 1, type: 'string' },
      { label: 'Password', key: 'password', required: true, displayOrder: 2, type: 'password' },
      { label: 'Email', key: 'email', required: true, displayOrder: 3, type: 'email' },
      { label: 'Phone Number', key: 'phone_number', required: true, displayOrder: 4, type: 'string' },
      // Add custom attributes here
      { label: 'Birthday', key: 'birthdate', required: true, displayOrder: 5, type: 'date' },
      { label: 'Gender', key: 'gender', required: true, displayOrder: 6, type: 'string' },
      // ...other fields...
    ]
  };
  
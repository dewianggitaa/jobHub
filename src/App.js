// App.js

import React from 'react';
import UserProvider from './UserProvider';
import AppContent from './AppContent';

const App = () => {
    return (
        <UserProvider>
            <AppContent />
        </UserProvider>
    );
};

export default App;

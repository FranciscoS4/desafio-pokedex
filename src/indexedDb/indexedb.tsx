import React, { useEffect } from 'react';
import IndexedDb from './IndexedDb';

const User = () => {
    useEffect(() => {
        const runIndexDb = async () => {
            const indexedDb = new IndexedDb('User');
            await indexedDb.createObjectStore(['user']);
            await indexedDb.putValue('user', { name: 'Francisco', email: 'login@gmail.com', senha: "123456"  });
        }
        runIndexDb();
    }, []);
    return (<React.Fragment></React.Fragment>)
}

export default User;
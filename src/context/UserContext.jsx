'use client';
import React, { createContext, useContext, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const UserContext = createContext('');

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserInfo = async (uid) => {
    if (!uid) {
      setCurrentUser(null);
      setIsLoading(false);
      return;
    }

    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCurrentUser(docSnap.data());
      } else {
        setCurrentUser(null);
      }
    } catch (err) {
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return <UserContext.Provider value={{ currentUser, isLoading, fetchUserInfo }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};

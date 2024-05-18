'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useUser } from '../context/UserContext';

const ProtectedRoute = (WrappedComponent) => {
  const ProtectedRouteComponent = (props) => {
    const router = useRouter();
    const { currentUser, isLoading, fetchUserInfo } = useUser();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          fetchUserInfo(user.uid);
        } else {
          router.push('/login');
        }
      });

      return () => unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!currentUser) {
      router.push('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  ProtectedRouteComponent.displayName = 'ProtectedRouteComponent';

  return ProtectedRouteComponent;
};

export default ProtectedRoute;

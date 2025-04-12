import Profile from '@/components/Profile';
import ProtectedRoute from '@/libs/ProtectedRoute';

const page = () => {
    return (
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>

    );
};

export default page;
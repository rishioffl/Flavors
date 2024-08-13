import React, { useState, useEffect } from 'react';
import './AdminUsers.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import NavBar from './NavBar';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [editedUserData, setEditedUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch users data on component mount
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/flavors/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleDelete = async () => {
        try {
            if (userToDelete) {
                await axios.delete(`http://localhost:8080/api/flavors/delete/${userToDelete}`);
                setUsers(users.filter(user => user.customerId !== userToDelete));
                setUserToDelete(null);
                setShowPopup(false);
                toast.success("User Deleted Successfully!!!");
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user.');
        }
    };

    const openDeletePopup = (userId) => {
        setUserToDelete(userId);
        setShowPopup(true);
    };

    const closeDeletePopup = () => {
        setShowPopup(false);
        setUserToDelete(null);
    };

    const startEditing = (user) => {
        setEditingUser(user.customerId);
        setEditedUserData({
            userName: user.username,
            emailId: user.emailId,
            mobileNumber: user.mobileNumber,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/api/flavors/update/${editingUser}`, editedUserData);
            setUsers(users.map(user => user.customerId === editingUser ? { ...user, ...editedUserData } : user));
            setEditingUser(null);
            toast.success("User Updated Successfully!!!");
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Failed to update user.');
        }
    };

    const cancelEditing = () => {
        setEditingUser(null);
    };

    // Filter users based on search input
    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='admin-body'>
            <div className="admin-dashboard-container">
                <NavBar/>
                <main className="admin-main-content">
                    <div className='admin-heading'>
                        <h1>Registered Users</h1>
                    </div>
                    
                    <br></br>
                    <table className="admin-users-table">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Phone Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map(user => (
                                <tr key={user.customerId}>
                                    <td>{user.customerId}</td>
                                    <td>
                                        {editingUser === user.customerId ? (
                                            <input 
                                                type="text" 
                                                name="userName" 
                                                value={editedUserData.userName} 
                                                onChange={handleInputChange} 
                                            />
                                        ) : (
                                            user.username
                                        )}
                                    </td>
                                    <td>
                                        {editingUser === user.customerId ? (
                                            <input 
                                                type="email" 
                                                name="emailId" 
                                                value={editedUserData.emailId} 
                                                onChange={handleInputChange} 
                                            />
                                        ) : (
                                            user.emailId
                                        )}
                                    </td>
                                    <td>
                                        {editingUser === user.customerId ? (
                                            <input 
                                                type="text" 
                                                name="phoneNumber" 
                                                value={editedUserData.mobileNumber} 
                                                onChange={handleInputChange} 
                                            />
                                        ) : (
                                            user.mobileNumber
                                        )}
                                    </td>
                                    <td>
                                        {editingUser === user.customerId ? (
                                            <>
                                                <button className="admin-button admin-save-button" onClick={handleUpdate}>Update</button>
                                                <button className="admin-button admin-cancel-button" onClick={cancelEditing}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="admin-button admin-save-button" onClick={() => startEditing(user)}>Edit User</button>
                                                <button className="admin-button admin-delete-button" onClick={() => openDeletePopup(user.customerId)}>Delete User</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </main>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h2 className='confirmDelete'>Confirm Delete?</h2>
                        <p className='confirmdelmess'>Are you sure you want to delete this user?</p>
                        <div className="popup-buttons">
                            <button className="popup-button popup-yes" onClick={handleDelete}>Yes</button>
                            <button className="popup-button popup-no" onClick={closeDeletePopup}>No</button>
                        </div>
                    </div>
                </div>
            )}

          
        </div>
    );
};

export default AdminUsers;

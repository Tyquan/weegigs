import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { addNewGig } from "../gigsSlice";
import { selectAllUsers } from '../../users/userSlice';

const AddGigForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const canSave = [title, body, userId].every(Boolean) && addRequestStatus === 'idle';

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.username}
        </option>
    ));

    const saveGig = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewGig({title, body, userId})).unwrap();

                setTitle('');
                setBody('');
                setUserId('');

                navigate('/');
            } catch (err) {
                console.error('Failed to save the gig:', err);
            } finally {
                setAddRequestStatus('idle')
            }
        }
    };

    return (
        <section>
            <h2>Add New Gig</h2>
            <form>
                <label>Gig Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} id="gigTitle" name="gigTitle" value={title} />
                <br />
                <label>Gig Body: </label>
                <textarea onChange={(e) => setBody(e.target.value)} id="gigBody" name="gigBody" value={body}></textarea>
                <br />
                <label>Author: </label>
                <select id="gigauthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <br />
                <button type="button" disabled={!canSave} onClick={saveGig}>Post Gig</button>
            </form>
        </section>
    );
};

export default AddGigForm;
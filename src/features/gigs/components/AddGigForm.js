import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { gigAdded } from "../gigSlice";
import { selectAllUsers } from '../../users/userSlice';

const AddGigForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [userId, setUserId] = useState('');

    const canSave = Boolean(title) && Boolean(company) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user._id} value={user._id}>
            {user.email}
        </option>
    ));

    const changeGig = () => {
        if (title && company) {
            dispatch(gigAdded(title, company, userId));
            setTitle("");
            setCompany("");
        }
    };

    return (
        <section>
            <h2>Add New Gig</h2>
            <form>
                <label>Gig Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} id="gigTitle" name="gigTitle" value={title} />
                <br />
                <label>Gig Company: </label>
                <input type="text" onChange={(e) => setCompany(e.target.value)} id="gigComapny" name="gigCompany" value={company} />
                <br />
                <label>Author: </label>
                <select id="gigauthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <input type="text" onChange={(e) => setTitle(e.target.value)} id="gigTitle" name="gigTitle" value={title} />
                <br />
                <button type="button" disabled={!canSave} onClick={saveGig}>Post Gig</button>
            </form>
        </section>
    );
};

export default AddGigForm;
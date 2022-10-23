import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { selectGigById, updateGig, deleteGig } from '../gigsSlice';
import { selectAllUsers } from '../../users/userSlice';

const EditGigForm = () => {
    const { gigId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const gig = useSelector((state) => selectGigById(state, Number(gigId)));
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState(gig?.title);
    const [company, setCompany] = useState(gig?.body);
    const [userId, setUserId] = useState(gig?.userId);
    const [requestStatus, setRequestStatus] = useState('idle');

    const canSave = [title, company, userId].every(Boolean) && requestStatus === 'idle';

    const onSaveGig = () => {
        if (canSave) {
            try {
                setRequestStatus('pending');
                // send updated data through redux
                dispatch(updateGig({
                    id: gig.id, title, company, userId
                })).unwrap();

                setTitle('');
                setCompany('');
                setUserId('');
                // send user to the gig after updating it
                navigate(`/gig/${gigId}`);
            } catch (error) {
                console.error('Failed to save gig:', error);
            } finally {
                setRequestStatus('idle');
            }
        }
    };

    const onDeleteGig = () => {
        try {
            setRequestStatus('pending');
            // send deleted data through redux
            dispatch(deleteGig({ id: gig.id })).unwrap();

            setTitle('');
            setCompany('');
            setUserId('');
            // send user to the main page
            navigate(`/`);
        } catch (error) {
            console.error('Failed to delete gig:', error);
        } finally {
            setRequestStatus('idle');
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ));

    
    return (
        <section>
            <h2>Update Gig</h2>
            <form>
                <label htmlFor='gigTitle'>Gig Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} id="gigTitle" name="gigTitle" value={title} />
                <br />
                <label htmlFor='gigCompany'>Gig Company: </label>
                <input type="text" onChange={(e) => setCompany(e.target.value)} id="gigComapny" name="gigCompany" value={company} />
                <br />
                <label htmlFor='gigAuthor'>Author: </label>
                <select id="gigAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <br />
                <button type="button" disabled={!canSave} onClick={onSaveGig}>Save Gig</button>
                <button id='deleteButton' type='button' onClick={onDeleteGig}>Delete Gig</button>
            </form>
        </section>
    );
}

export default EditGigForm;
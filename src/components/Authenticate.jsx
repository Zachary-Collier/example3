import { useState } from 'react'

export default function Authenticate({ token, setToken }) {

    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(
                'https://fsa-jwt-practice.herokuapp.com/authenticate',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            setSuccessMessage(result.message);
            alert('Success')

        } catch (error) {
            setError(error.message);
            console.log(error)
            alert('fail')
        }
    }

    return <>
        <button onClick={handleClick}>Authenticate!</button>

    </>;
}
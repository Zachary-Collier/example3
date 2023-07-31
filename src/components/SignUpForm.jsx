import { useState } from "react";

export default function SignUpForm({ token, setToken }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        async function postCred() {
            try {
                console.log({ username, password })
                const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    })
                const result = await response.json();
                console.log(result)
                setToken(result.token)

            } catch (error) {
                setError(error)
                console.log(error)
            }
        }
        postCred()
    }


    return <>
        <div>
            <h2>Sign Up!</h2>
        </div>

        <form method="POST" onSubmit={handleSubmit}>
            <div>
                <h3>Username</h3>
                <>{username}</>
                <br />
                <label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
            </div>
            <div>
                <h3>Password</h3>
                <>{password}</>
                <br />
                <label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <button>Submit</button>
        </form>
    </>
}
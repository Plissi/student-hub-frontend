"use client"

import  {useState} from "react";
import {useRouter} from "next/navigation";
const url = process.env.API_URL
const studentPostURL = url+"student"

export default function CreateStudent(){
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [school, setSchool] = useState('')
    const [notes, setNotes] = useState('')

    const  router = useRouter();

    const create = async () => {
        await fetch("studentPostURL",
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    lastName,
                    school
                })
            })
        setName('')
        setLastName('')
        setSchool('')

        router.refresh()
    }

    return (
        <form onSubmit={create}>
            <h3> Add a Student</h3>
            <input
                type={"text"}
                placeholder={"Name"}
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <input
                type={"text"}
                placeholder={"Lastname"}
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
            />
            <input
                type={"text"}
                placeholder={"School"}
                value={school}
                onChange={(e)=> setSchool(e.target.value)}
            />
            <button type={"submit"}>
                Add
            </button>
        </form>
    )
}

import Link from "next/link";

async function getStudent(studentID: number){
    const res = await fetch(`http://localhost:3001/students/${studentID}`, {next:{revalidate: 10}});
    return res.json();
}

function Note({note}:any) {
    return(
        <div>
            <p>{note}</p>
        </div>
    );
}

export default async function StudentPage({params}:any) {
    const student = await getStudent(params.id);
    return (
        <div>
            <h1>Student {student.id}</h1>
            <div>
                <h2>{student.name}</h2>
                <h2>{student.lastName}</h2>
                <p>{student.school}</p>
                <div>
                    {
                        student.notes?.map((note : any) => {
                            return <Note note={note} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

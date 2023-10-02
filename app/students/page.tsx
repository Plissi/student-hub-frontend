import Link from "next/link";
import CreateStudent from "@/app/students/CreateStudent";
const url = process.env.API_URL
const studentsURL = url+"students"
async function getStudents(){

    const res = await fetch(studentsURL, {cache:'no-cache'});
    return res.json();
}

function Student({student}:any) {
    const {id, name, lastName, school} = student || {};
    return(
        <Link href={`/students/${id}`}>
            <div>
                <h2>{name} {lastName}</h2>
                <p>{school}</p>
            </div>
        </Link>
    );
}

export default async function StudentsPage() {
    const students = await getStudents();
    return (
        <div>
            <h1>Students</h1>
            <CreateStudent/>
            <div>
                {
                    students?.map((student : any) => {
                        return <Student key={student.id} student={student} />;
                    })
                }
            </div>
        </div>
    );
}

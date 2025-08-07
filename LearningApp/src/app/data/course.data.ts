import { Course } from "../model/Course";
import { Student } from "../model/Student";

export const courseData: Course = {
    id: 1,
    name: "Desarrollo Web con Angular",
    students: [
        {
            id: 1,
            identification: 1234567890,
            name: "María",
            surname: "García López"
        },
        {
            id: 2,
            identification: 9876543210,
            name: "Carlos",
            surname: "Rodríguez Pérez"
        },
        {
            id: 3,
            identification: 5555666777,
            name: "Ana",
            surname: "Martínez Silva"
        },
        {
            id: 4,
            identification: 1111222333,
            name: "Luis",
            surname: "Fernández Torres"
        }
    ]
};

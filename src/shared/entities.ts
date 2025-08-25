export interface student {
    id: number; // Unique identifier for the student
    name: string;
    lastname?: string; // Optional field
    createdAt?: Date; // Optional field
    phone: string; 
    gender: string;
    address: string;
    courseId: number;
}

export interface course {
    id: number; // Unique identifier for the course
    name: string;
    createdAt?: string; // Optional field
    adreess: string; // Duration in hours
}

export interface courseStudent {
    id: number; // Unique identifier for the course-student relationship
    studentId: number; // ID of the student
    courseId: number; // ID of the course
    createdAt?: Date; // Optional field
}
import { Course } from '../types/course';

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites from scratch.",
    instructor: "Sarah Johnson",
    level: "Beginner",
    duration: "6 weeks",
    enrolled: 1243,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    completed: false,
    progress: 0,
    lessons: [
      { id: 1, title: "Getting Started with HTML", duration: "25 min", completed: false },
      { id: 2, title: "CSS Styling Basics", duration: "30 min", completed: false },
      { id: 3, title: "JavaScript Fundamentals", duration: "45 min", completed: false },
      { id: 4, title: "Building Your First Website", duration: "60 min", completed: false },
      { id: 5, title: "Responsive Design Principles", duration: "40 min", completed: false }
    ]
  },
  {
    id: 2,
    title: "React for Beginners",
    description: "Master React and learn to build dynamic, interactive user interfaces with modern JavaScript.",
    instructor: "Michael Chen",
    level: "Intermediate",
    duration: "8 weeks",
    enrolled: 987,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
    completed: false,
    progress: 0,
    lessons: [
      { id: 1, title: "React Components Overview", duration: "35 min", completed: false },
      { id: 2, title: "State and Props", duration: "40 min", completed: false },
      { id: 3, title: "Hooks in React", duration: "50 min", completed: false },
      { id: 4, title: "Managing Side Effects", duration: "45 min", completed: false },
      { id: 5, title: "Building a Real Project", duration: "90 min", completed: false }
    ]
  },
  {
    id: 3,
    title: "Python Programming Masterclass",
    description: "From basics to advanced concepts, become proficient in Python programming and data structures.",
    instructor: "Dr. Emily Roberts",
    level: "Beginner",
    duration: "10 weeks",
    enrolled: 2156,
    rating: 4.7,
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    completed: false,
    progress: 0,
    lessons: [
      { id: 1, title: "Python Basics and Syntax", duration: "30 min", completed: false },
      { id: 2, title: "Data Types and Variables", duration: "35 min", completed: false },
      { id: 3, title: "Control Flow and Loops", duration: "40 min", completed: false },
      { id: 4, title: "Functions and Modules", duration: "45 min", completed: false },
      { id: 5, title: "Object-Oriented Programming", duration: "55 min", completed: false },
      { id: 6, title: "Working with Files", duration: "40 min", completed: false }
    ]
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Learn design principles, user research, wireframing, and prototyping to create beautiful interfaces.",
    instructor: "Alex Martinez",
    level: "Beginner",
    duration: "5 weeks",
    enrolled: 1534,
    rating: 4.6,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    completed: false,
    progress: 0,
    lessons: [
      { id: 1, title: "Introduction to UI/UX", duration: "20 min", completed: false },
      { id: 2, title: "User Research Methods", duration: "35 min", completed: false },
      { id: 3, title: "Wireframing Techniques", duration: "40 min", completed: false },
      { id: 4, title: "Design Systems", duration: "45 min", completed: false },
      { id: 5, title: "Prototyping Tools", duration: "50 min", completed: false }
    ]
  },
  {
    id: 5,
    title: "Database Design with SQL",
    description: "Understand relational databases, SQL queries, and database optimization techniques.",
    instructor: "James Wilson",
    level: "Intermediate",
    duration: "7 weeks",
    enrolled: 876,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    completed: false,
    progress: 0,
    lessons: [
      { id: 1, title: "Database Fundamentals", duration: "30 min", completed: false },
      { id: 2, title: "SQL Queries and Joins", duration: "45 min", completed: false },
      { id: 3, title: "Database Normalization", duration: "40 min", completed: false },
      { id: 4, title: "Indexing and Performance", duration: "50 min", completed: false },
      { id: 5, title: "Advanced SQL Techniques", duration: "55 min", completed: false }
    ]
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Build native mobile applications for iOS and Android using React Native.",
    instructor: "Nina Patel",
    level: "Advanced",
    duration: "12 weeks",
    enrolled: 654,
    rating: 4.9,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    completed: false,
    progress: 0,
    lessons: [
      { id: 1, title: "React Native Setup", duration: "30 min", completed: false },
      { id: 2, title: "Mobile UI Components", duration: "40 min", completed: false },
      { id: 3, title: "Navigation in Mobile Apps", duration: "45 min", completed: false },
      { id: 4, title: "State Management", duration: "50 min", completed: false },
      { id: 5, title: "API Integration", duration: "55 min", completed: false },
      { id: 6, title: "Publishing Your App", duration: "60 min", completed: false }
    ]
  }
];

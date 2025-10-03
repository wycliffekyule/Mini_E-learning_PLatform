import { Course } from '../types/course';
import { BookOpen, Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (courseId: number) => void;
}

export function CourseCard({ course, onSelectCourse }: CourseCardProps) {
  return (
    <div
      onClick={() => onSelectCourse(course.id)}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {course.completed && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Completed
          </div>
        )}
        {course.progress > 0 && !course.completed && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-2">
            <div className="flex items-center justify-between text-white text-sm mb-1">
              <span>{course.progress}% Complete</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {course.level}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.lessons.length} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-sm text-gray-600 font-medium">{course.instructor}</span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Users className="w-4 h-4" />
            <span>{course.enrolled.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

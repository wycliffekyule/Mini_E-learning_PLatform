import { Course, Lesson } from '../types/course';
import { ArrowLeft, BookOpen, Clock, Users, Star, CheckCircle, Circle, Award } from 'lucide-react';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onToggleLesson: (courseId: number, lessonId: number) => void;
  onCompleteCourse: (courseId: number) => void;
}

export function CourseDetail({ course, onBack, onToggleLesson, onCompleteCourse }: CourseDetailProps) {
  const completedLessons = course.lessons.filter(l => l.completed).length;
  const totalLessons = course.lessons.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white mb-6 hover:gap-3 transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Courses</span>
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {course.level}
              </span>
              <div className="flex items-center gap-1 text-white">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">{course.rating}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-3">
              {course.title}
            </h1>

            <p className="text-white/90 text-lg mb-4 max-w-3xl">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{totalLessons} lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{course.enrolled.toLocaleString()} enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About this course</h2>
              <p className="text-gray-600 mb-4">
                This course is taught by <span className="font-semibold text-gray-800">{course.instructor}</span>,
                an experienced instructor who has helped thousands of students master {course.title.toLowerCase()}.
              </p>
              <p className="text-gray-600">
                Whether you're just starting out or looking to enhance your skills, this {course.level.toLowerCase()}-level
                course provides comprehensive coverage of essential concepts and practical applications.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Course Content</h2>
                <span className="text-sm text-gray-600">
                  {completedLessons} of {totalLessons} completed
                </span>
              </div>

              <div className="space-y-3">
                {course.lessons.map((lesson, index) => (
                  <LessonItem
                    key={lesson.id}
                    lesson={lesson}
                    index={index}
                    onToggle={() => onToggleLesson(course.id, lesson.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h3>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Overall Progress</span>
                  <span className="text-sm font-semibold text-gray-800">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{completedLessons}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-600">{totalLessons - completedLessons}</div>
                  <div className="text-sm text-gray-600">Remaining</div>
                </div>
              </div>

              {course.completed ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <h4 className="font-bold text-green-800 mb-1">Congratulations!</h4>
                  <p className="text-sm text-green-700">You've completed this course</p>
                </div>
              ) : (
                <button
                  onClick={() => onCompleteCourse(course.id)}
                  disabled={course.progress < 100}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    course.progress === 100
                      ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {course.progress === 100 ? 'Complete Course' : 'Complete all lessons first'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LessonItem({ lesson, index, onToggle }: { lesson: Lesson; index: number; onToggle: () => void }) {
  return (
    <div
      onClick={onToggle}
      className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
        lesson.completed
          ? 'bg-green-50 border-green-200 hover:border-green-300'
          : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      <div className={`flex-shrink-0 ${lesson.completed ? 'text-green-600' : 'text-gray-400'}`}>
        {lesson.completed ? (
          <CheckCircle className="w-6 h-6" />
        ) : (
          <Circle className="w-6 h-6" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-gray-500">Lesson {index + 1}</span>
        </div>
        <h4 className={`font-semibold ${lesson.completed ? 'text-gray-700' : 'text-gray-800'}`}>
          {lesson.title}
        </h4>
      </div>

      <div className="flex items-center gap-1 text-sm text-gray-500">
        <Clock className="w-4 h-4" />
        <span>{lesson.duration}</span>
      </div>
    </div>
  );
}

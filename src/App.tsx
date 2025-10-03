import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { CourseDetail } from './components/CourseDetail';
import { coursesData } from './data/courses';
import { Course } from './types/course';
import { Search } from 'lucide-react';

function App() {
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('All');

  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'All' || course.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const handleToggleLesson = (courseId: number, lessonId: number) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id === courseId) {
          const updatedLessons = course.lessons.map(lesson =>
            lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
          );
          const completedCount = updatedLessons.filter(l => l.completed).length;
          const progress = Math.round((completedCount / updatedLessons.length) * 100);
          return { ...course, lessons: updatedLessons, progress };
        }
        return course;
      })
    );
  };

  const handleCompleteCourse = (courseId: number) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <CourseDetail
          course={selectedCourse}
          onBack={() => setSelectedCourseId(null)}
          onToggleLesson={handleToggleLesson}
          onCompleteCourse={handleCompleteCourse}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Expand Your Knowledge</h2>
          <p className="text-xl text-blue-100 mb-8">Choose from our curated selection of courses to start learning today</p>

          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            {filterLevel === 'All' ? 'All Courses' : `${filterLevel} Courses`}
            <span className="text-gray-500 text-lg ml-2">({filteredCourses.length})</span>
          </h3>

          <div className="flex gap-2">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filterLevel === level
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={setSelectedCourseId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

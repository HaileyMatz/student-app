import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { Post } from './components/Post';

function App() {
  const studentData = [
    {
      nameData: 'Ada',
      emailData: 'ada@dev.org',
    },

    {
      nameData: 'Hailey',
      emailData: 'hailey@dev.org',
    },

    {
      nameData: 'Dooboo',
      emailData: 'dooboo@dev.org',
    },
  ];
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
      <Post></Post>
    </main>
  );
}

export default App;

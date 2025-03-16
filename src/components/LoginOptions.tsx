import Link from 'next/link';

const LoginOptions = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-semibold mb-4">Login as:</h1>
      <Link href="/admin" className="bg-blue-500 text-white p-2 rounded-md w-40 text-center">
        Admin
      </Link>
      <Link href="/student" className="bg-green-500 text-white p-2 rounded-md w-40 text-center">
        Student
      </Link>
      <Link href="/parent" className="bg-yellow-500 text-white p-2 rounded-md w-40 text-center">
        Parent
      </Link>
      <Link href="/teacher" className="bg-red-500 text-white p-2 rounded-md w-40 text-center">
        Teacher
      </Link>
    </div>
  );
};

export default LoginOptions;
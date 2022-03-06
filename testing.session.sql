select users.name,
    classrooms.name,
    student_classrooms.createdAt
from classrooms,
    users,
    student_classrooms
where users.id = student_classrooms.student_id
    AND classrooms.id = student_classrooms.classroom_id -- student_classrooms -- where users.id = student_classrooms.students_id
    --     AND classroom.id = student_classrooms.classrooms_id;
    -- "SELECT 
    -- bagian_karyawan.id,
    -- bagian_karyawan.karyawan_id,
    -- karyawan.nama_lengkap,
    -- bagian.nama_bagian,
    -- bagian_karyawan.tanggal_mulai
    -- FROM bagian_karyawan, karyawan, bagian 
    -- WHERE karyawan.id = bagian_karyawan.karyawan_id 
    -- AND bagian.id = bagian_karyawan.bagian_id 
    -- AND bagian_karyawan.karyawan_id = $id ";
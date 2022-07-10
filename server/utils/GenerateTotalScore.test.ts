export {}

const GenerateTotalScore = require('./GenerateTotalScore');

const data = [
        {
            "id": 7,
            "score": 30,
            "createdAt": "2022-05-23T08:18:33.000Z",
            "updatedAt": "2022-05-23T08:18:33.000Z",
            "answer_id": 10,
            "classroom_id": 1,
            "task_id": 1,
            "Task": {
                "id": 1,
                "title": "Ujian IPA",
                "deadline": "2023-03-07T00:00:00.000Z",
                "description": "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
                "other": "Tugas Nilai Tambahan IPS",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "classroom_id": 1
            },
            "Answer_task": {
                "id": 10,
                "answer": "oktovianus",
                "createdAt": "2022-05-23T08:17:39.000Z",
                "updatedAt": "2022-05-23T08:17:39.000Z",
                "student_id": 5,
                "question_id": 1,
                "User": {
                    "id": 5,
                    "name": "kagura",
                    "phone": "0821321312321212",
                    "email": "kagura@gmail.com",
                    "password": "$2b$10$CknmyF7eL6n.rjG2fEtK3OWg1NyNaJQFvBzanXBS6UqUfWvhdvaTy",
                    "role": "siswa",
                    "profile": null,
                    "jk": "Laki-Laki",
                    "createdAt": "2022-05-23T08:17:00.000Z",
                    "updatedAt": "2022-05-23T08:17:00.000Z"
                }
            }
        },
        {
            "id": 8,
            "score": 40,
            "createdAt": "2022-05-23T08:18:33.000Z",
            "updatedAt": "2022-05-23T08:18:33.000Z",
            "answer_id": 11,
            "classroom_id": 1,
            "task_id": 1,
            "Task": {
                "id": 1,
                "title": "Ujian IPA",
                "deadline": "2023-03-07T00:00:00.000Z",
                "description": "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
                "other": "Tugas Nilai Tambahan IPS",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "classroom_id": 1
            },
            "Answer_task": {
                "id": 11,
                "answer": "karbonmonoksida",
                "createdAt": "2022-05-23T08:17:39.000Z",
                "updatedAt": "2022-05-23T08:17:39.000Z",
                "student_id": 5,
                "question_id": 2,
                "User": {
                    "id": 5,
                    "name": "kagura",
                    "phone": "0821321312321212",
                    "email": "kagura@gmail.com",
                    "password": "$2b$10$CknmyF7eL6n.rjG2fEtK3OWg1NyNaJQFvBzanXBS6UqUfWvhdvaTy",
                    "role": "siswa",
                    "profile": null,
                    "jk": "Laki-Laki",
                    "createdAt": "2022-05-23T08:17:00.000Z",
                    "updatedAt": "2022-05-23T08:17:00.000Z"
                }
            }
        },
        {
            "id": 3,
            "score": 50,
            "createdAt": "2022-05-22T02:26:57.000Z",
            "updatedAt": "2022-05-22T02:26:57.000Z",
            "answer_id": 5,
            "classroom_id": 1,
            "task_id": 1,
            "Task": {
                "id": 1,
                "title": "Ujian IPA",
                "deadline": "2023-03-07T00:00:00.000Z",
                "description": "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
                "other": "Tugas Nilai Tambahan IPS",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "classroom_id": 1
            },
            "Answer_task": {
                "id": 5,
                "answer": "oksigen",
                "createdAt": "2022-05-22T02:26:18.000Z",
                "updatedAt": "2022-05-22T02:26:18.000Z",
                "student_id": 3,
                "question_id": 1,
                "User": {
                    "id": 3,
                    "name": "Mahmud Bin Ali",
                    "phone": "0123456789",
                    "email": "mahmud@gmail.com",
                    "password": "$2b$10$j3DEAJUQuvsP4rdU7QKLEeABQvxcDBEsC0DCwmSAX2i/eolkt6pMa",
                    "role": "siswa",
                    "profile": null,
                    "jk": null,
                    "createdAt": "2022-05-18T06:10:06.000Z",
                    "updatedAt": "2022-05-18T06:10:06.000Z"
                }
            }
        },
        {
            "id": 4,
            "score": 10,
            "createdAt": "2022-05-22T02:26:57.000Z",
            "updatedAt": "2022-05-22T02:26:57.000Z",
            "answer_id": 6,
            "classroom_id": 1,
            "task_id": 1,
            "Task": {
                "id": 1,
                "title": "Ujian IPA",
                "deadline": "2023-03-07T00:00:00.000Z",
                "description": "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
                "other": "Tugas Nilai Tambahan IPS",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "classroom_id": 1
            },
            "Answer_task": {
                "id": 6,
                "answer": "hantu",
                "createdAt": "2022-05-22T02:26:31.000Z",
                "updatedAt": "2022-05-22T02:26:31.000Z",
                "student_id": 3,
                "question_id": 2,
                "User": {
                    "id": 3,
                    "name": "Mahmud Bin Ali",
                    "phone": "0123456789",
                    "email": "mahmud@gmail.com",
                    "password": "$2b$10$j3DEAJUQuvsP4rdU7QKLEeABQvxcDBEsC0DCwmSAX2i/eolkt6pMa",
                    "role": "siswa",
                    "profile": null,
                    "jk": null,
                    "createdAt": "2022-05-18T06:10:06.000Z",
                    "updatedAt": "2022-05-18T06:10:06.000Z"
                }
            }
        },
        {
            "id": 1,
            "score": 50,
            "createdAt": "2022-05-18T09:40:53.000Z",
            "updatedAt": "2022-05-18T09:40:53.000Z",
            "answer_id": 1,
            "classroom_id": 1,
            "task_id": 1,
            "Task": {
                "id": 1,
                "title": "Ujian IPA",
                "deadline": "2023-03-07T00:00:00.000Z",
                "description": "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
                "other": "Tugas Nilai Tambahan IPS",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "classroom_id": 1
            },
            "Answer_task": {
                "id": 1,
                "answer": "oksigen karbon monosd sdasd wd d",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "student_id": 4,
                "question_id": 1,
                "User": {
                    "id": 4,
                    "name": "Aldy",
                    "phone": "0821321312321212",
                    "email": "aldy@gmail.com",
                    "password": "$2b$10$j3DEAJUQuvsP4rdU7QKLEeABQvxcDBEsC0DCwmSAX2i/eolkt6pMa",
                    "role": "siswa",
                    "profile": "http://res.cloudinary.com/drgorgm6v/image/upload/v1652933638/elearning/bdlofpgbrwv4knastdtu.jpg",
                    "jk": "Laki-Laki",
                    "createdAt": "2022-05-18T06:44:54.000Z",
                    "updatedAt": "2022-05-19T04:13:59.000Z"
                }
            }
        },
        {
            "id": 2,
            "score": 50,
            "createdAt": "2022-05-18T09:40:53.000Z",
            "updatedAt": "2022-05-18T09:40:53.000Z",
            "answer_id": 2,
            "classroom_id": 1,
            "task_id": 1,
            "Task": {
                "id": 1,
                "title": "Ujian IPA",
                "deadline": "2023-03-07T00:00:00.000Z",
                "description": "lorem ipmus si bersama kawan kawan mereka dan aku kan bersepeda keliling desa bersama teman teman dan aku",
                "other": "Tugas Nilai Tambahan IPS",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "classroom_id": 1
            },
            "Answer_task": {
                "id": 2,
                "answer": "karbondioksida",
                "createdAt": "2022-05-18T06:10:06.000Z",
                "updatedAt": "2022-05-18T06:10:06.000Z",
                "student_id": 4,
                "question_id": 2,
                "User": {
                    "id": 4,
                    "name": "Aldy",
                    "phone": "0821321312321212",
                    "email": "aldy@gmail.com",
                    "password": "$2b$10$j3DEAJUQuvsP4rdU7QKLEeABQvxcDBEsC0DCwmSAX2i/eolkt6pMa",
                    "role": "siswa",
                    "profile": "http://res.cloudinary.com/drgorgm6v/image/upload/v1652933638/elearning/bdlofpgbrwv4knastdtu.jpg",
                    "jk": "Laki-Laki",
                    "createdAt": "2022-05-18T06:44:54.000Z",
                    "updatedAt": "2022-05-19T04:13:59.000Z"
                }
            }
        }
    ]

const result = [
      {
          "task_id": 1,
          "task_title": "Ujian IPA",
          "score": 70,
          "answer_id": 10,
          "user": "kagura",
          "user_id": 5
      },
      {
          "task_id": 1,
          "task_title": "Ujian IPA",
          "score": 60,
          "answer_id": 5,
          "user": "Mahmud Bin Ali",
          "user_id": 3
      },
      {
          "task_id": 1,
          "task_title": "Ujian IPA",
          "score": 100,
          "answer_id": 1,
          "user": "Aldy",
          "user_id": 4
      }
  ]

test('return classcode with defined length 6', () => {
    const dummy = GenerateTotalScore(data)
    expect(dummy).toEqual(result)
  });


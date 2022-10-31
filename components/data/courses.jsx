// const coursesData = [
//   {
//     id: 1,
//     title: "improving editing skills",
//     instructor: "rosaline ene",
//     tag: "IT and software",
//     duration: 10,
//     lectures: 6,
//     students: 250,
//     rating: 4,
//     thumbnail: "/assets/images/video-editing.jpg",
//     creatorImage: "/assets/images/teach1.jpg",
//     videoLength: 15,
//     videoUrl:
//       "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
//     sectionCount: 3,
//     sections: [
//       {
//         id: 1,
//         topic: "introduction to IT and software",
//         videoId: 1,
//         videoUrl:
//           "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
//       },
//       {
//         id: 2,
//         topic: "Intermidiate  IT and software",
//         videoId: 2,
//         videoUrl:
//           "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
//       },
//       {
//         id: 3,
//         topic: "advanced  IT and software",
//         videoId: 3,
//         videoUrl:
//           "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
//       },
//     ],
//   },
//   {
//     id: 7,
//     title: "basic baking and pastry",
//     instructor: "amarachi david",
//     tag: "cooking",
//     duration: 10,
//     lectures: 6,
//     students: 250,
//     rating: 4,
//     thumbnail: "/assets/images/baking.jpeg",
//     creatorImage: "/assets/images/teach1.jpg",
//     videoLength: 15,
//     videoUrl:
//       "https://www.youtube.com/watch?v=UlKkQ9qnmzY&ab_channel=CakeLovers",
//   },
//   {
//     id: 8,
//     title: "ethical hacking beginner course",
//     instructor: "anonymous",
//     tag: "IT and software",
//     duration: 10,
//     lectures: 6,
//     students: 250,
//     rating: 4,
//     thumbnail: "/assets/images/anonymous.jpeg",
//     creatorImage: "/assets/images/teach2.jpg",
//     videoLength: 15,
//     videoUrl:
//       "https://www.youtube.com/watch?v=3yiT_WMlosg&ab_channel=DavidBombal",
//   },
//   {
//     id: 2,
//     title: "New React Bootcamp",
//     instructor: "Andrew emeka",
//     tag: "development",
//     duration: 14,
//     lectures: 9,
//     students: 450,
//     rating: 5,
//     thumbnail: "/assets/images/react-bootcamp.png",
//     creatorImage: "/assets/images/teach2.jpg",
//     videoLength: 21,
//     videoUrl:
//       "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&ab_channel=Codevolution",
//   },
//   {
//     id: 3,
//     title: "healthy workout tips",
//     instructor: "collins augustine",
//     tag: "health and fitness",
//     duration: 6,
//     lectures: 7,
//     students: 150,
//     rating: 4,
//     thumbnail: "/assets/images/healty-workout.jpg",
//     creatorImage: "/assets/images/teach3.jpg",
//     videoLength: 4,
//     videoUrl:
//       "https://www.youtube.com/watch?v=1Q8YleZYOXU&ab_channel=GravityTransformation-FatLossExperts",
//   },
//   {
//     id: 4,
//     title: "marketing strategies",
//     instructor: "okogeri chibuike",
//     tag: "marketing",
//     duration: 15,
//     lectures: 8,
//     students: 350,
//     rating: 5,
//     thumbnail: "/assets/images/marketing-strategy.jpg",
//     creatorImage: "/assets/images/teach4.jpg",
//     videoLength: 8,
//     videoUrl:
//       "https://www.youtube.com/watch?v=hZLMv5aexto&ab_channel=BrianTracy",
//   },
//   {
//     id: 5,
//     title: "affiliate bootcamp",
//     instructor: "issabella oche",
//     tag: "marketing",
//     duration: 12,
//     lectures: 7,
//     students: 100,
//     rating: 4,
//     thumbnail: "/assets/images/affliate-bootcamp.png",
//     creatorImage: "/assets/images/teach1.jpg",
//     videoLength: 8,
//     videoUrl:
//       "https://www.youtube.com/watch?v=9_7W5JysbU0&ab_channel=IJAPARIGYANG",
//   },
//   {
//     id: 6,
//     title: "basic photography",
//     instructor: "silas okeke",
//     tag: "photography",
//     duration: 4,
//     lectures: 7,
//     students: 650,
//     rating: 5,
//     thumbnail: "/assets/images/basic-photography.jpg",
//     creatorImage: "/assets/images/teach2.jpg",
//     videoLength: 14,
//     videoUrl:
//       "https://www.youtube.com/watch?v=pFyOznL9UvA&ab_channel=AlecMarkarian",
//   },
// ];

const coursesData = [
  {
    id: "A0001",
    title: "IT and software",
    instructor: "rosaline ene",
    tag: "IT and software",
    sectionCount: 16,
    students: 250,
    rating: 4,
    thumbnail: "/assets/images/video-editing.jpg",
    creatorImage: "/assets/images/teach1.jpg",
    totalLectureCount: 164,
    totalDuration: "46 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "Introduction to IT and software",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "Overview of IT.",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
            viewedDuration: "0 Min",
          },
          {
            lectureId: "02",
            lectureTitle: "Use of IT.",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "Advanced It and software",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "working with objects.",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=ZQDGJn89uNk&ab_channel=ParkerWalbeck",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
  {
    id: "A0002",
    title: "Basic baking and pastry",
    instructor: "dorathy unsworth",
    tag: "Cooking",
    sectionCount: 6,
    students: 150,
    rating: 5,
    thumbnail: "/assets/images/baking.jpeg",
    creatorImage: "/assets/images/teach2.jpg",
    totalLectureCount: 64,
    totalDuration: "14 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=UlKkQ9qnmzY&ab_channel=CakeLovers",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "Lets start with cake",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "Overview of IT.",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=UlKkQ9qnmzY&ab_channel=CakeLovers",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "Andvanced pastry methods",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "working with objects.",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=UlKkQ9qnmzY&ab_channel=CakeLovers",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0003",
        sectionTitle: "intercontinental baking",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "working with objects.",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=UlKkQ9qnmzY&ab_channel=CakeLovers",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
  {
    id: "A0003",
    title: "new react bootcamp",
    instructor: "Robert oliver",
    tag: "development",
    sectionCount: 12,
    students: 390,
    rating: 5,
    thumbnail: "/assets/images/react-bootcamp.png",
    creatorImage: "/assets/images/teach4.jpg",
    totalLectureCount: 67,
    totalDuration: "19 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&ab_channel=Codevolution",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "what is react",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "Introduction to react",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&ab_channel=Codevolution",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "installing react",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "react installation guide",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&ab_channel=Codevolution",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0003",
        sectionTitle: "Javascript refresher ",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "es6 + refresher",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&ab_channel=Codevolution",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
  {
    id: "A0004",
    title: "ethical hacking beginner course",
    instructor: "Anonymous",
    tag: "Hacking",
    sectionCount: 9,
    students: 120,
    rating: 4,
    thumbnail: "/assets/images/anonymous.jpeg",
    creatorImage: "/assets/images/teach3.jpg",
    totalLectureCount: 67,
    totalDuration: "19 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=3yiT_WMlosg&ab_channel=DavidBombal",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "HAcking for dummies",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "Introduction to hacking",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=3yiT_WMlosg&ab_channel=DavidBombal",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "Wifi hacking",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "Cracking wps2 wifi",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=3yiT_WMlosg&ab_channel=DavidBombal",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0003",
        sectionTitle: "ethical hacking",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "working with White hat tools.",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=3yiT_WMlosg&ab_channel=DavidBombal",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
  {
    id: "A0005",
    title: "healthy workout tips",
    instructor: "joseph jorin",
    tag: "health and fitness",
    sectionCount: 8,
    students: 47,
    rating: 4,
    thumbnail: "/assets/images/healty-workout.jpg",
    creatorImage: "/assets/images/teach2.jpg",
    totalLectureCount: 37,
    totalDuration: "12 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=1Q8YleZYOXU&ab_channel=GravityTransformation-FatLossExperts",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "fitness at its finest",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "Arm workout",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=1Q8YleZYOXU&ab_channel=GravityTransformation-FatLossExperts",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "how to get abs",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "abs workout",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=1Q8YleZYOXU&ab_channel=GravityTransformation-FatLossExperts",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0003",
        sectionTitle: "thigh workout ",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "become the thigh god",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=1Q8YleZYOXU&ab_channel=GravityTransformation-FatLossExperts",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
  {
    id: "A0006",
    title: "marketing strategies",
    instructor: "okogeri chibuike",
    tag: "marketing",
    sectionCount: 6,
    students: 21,
    rating: 5,
    thumbnail: "/assets/images/marketing-strategy.jpg",
    creatorImage: "/assets/images/teach3.jpg",
    totalLectureCount: 37,
    totalDuration: "12 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=hZLMv5aexto&ab_channel=BrianTracy",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "marketing inttroduction",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "what is marketing",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=hZLMv5aexto&ab_channel=BrianTracy",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "best marketing strategies",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "real estate management",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=hZLMv5aexto&ab_channel=BrianTracy",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0003",
        sectionTitle: "terrirble marketing strategies",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "radio ads",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=hZLMv5aexto&ab_channel=BrianTracy",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
  {
    id: "A0007",
    title: "affliate bootcamp",
    instructor: "issabella oche",
    tag: "marketing",
    sectionCount: 6,
    students: 21,
    rating: 5,
    thumbnail: "/assets/images/affliate-bootcamp.png",
    creatorImage: "/assets/images/teach1.jpg",
    totalLectureCount: 37,
    totalDuration: "12 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=9_7W5JysbU0&ab_channel=IJAPARIGYANG",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "marketing inttroduction",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "what is marketing",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=9_7W5JysbU0&ab_channel=IJAPARIGYANG",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "best marketing strategies",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "real estate management",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=9_7W5JysbU0&ab_channel=IJAPARIGYANG",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0003",
        sectionTitle: "terrirble marketing strategies",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "radio ads",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=9_7W5JysbU0&ab_channel=IJAPARIGYANG",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
  {
    id: "A0008",
    title: "Basic  photography",
    instructor: "john doe",
    tag: "photography",
    sectionCount: 6,
    students: 21,
    rating: 5,
    thumbnail: "/assets/images/basic-photography.jpg",
    creatorImage: "/assets/images/teach2.jpg",
    totalLectureCount: 37,
    totalDuration: "12 Hours",
    thumbnailVideo:
      "https://www.youtube.com/watch?v=hZLMv5aexto&ab_channel=BrianTracy",
    sections: [
      {
        sectionId: "0001",
        sectionTitle: "marketing inttroduction",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "what is marketing",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=pFyOznL9UvA&ab_channel=AlecMarkarian",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0002",
        sectionTitle: "best marketing strategies",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "real estate management",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=pFyOznL9UvA&ab_channel=AlecMarkarian",
            viewedDuration: "0 Min",
          },
        ],
      },
      {
        sectionId: "0003",
        sectionTitle: "terrirble marketing strategies",
        lectureCount: 2,
        duration: "6:16 Min",
        lectures: [
          {
            lectureId: "01",
            lectureTitle: "radio ads",
            lectureDuration: "4:31 Min",
            videoURL:
              "https://www.youtube.com/watch?v=pFyOznL9UvA&ab_channel=AlecMarkarian",
            viewedDuration: "0 Min",
          },
        ],
      },
    ],
  },
];

export default coursesData;

export const lectures = (filter) => {
  const allLectures = [
    {
      id: "0",
      tags: ["programming"],
      name: "Basics of JavaScript",
      time: "12:00",
      cost: 10,
      image: "./lectures/basicsJS.jpg",
    },
    {
      id: "1",
      tags: ["kids", "math"],
      name: "Math for Kids",
      time: "09:00",
      cost: 10,
      image: "./lectures/mathForKids.jpg",
    },
    {
      id: "2",
      tags: ["kids", "painting"],
      name: "Perspective Painting",
      time: "12:30",
      cost: 10,
      image: "./lectures/paintingKids.jpg",
    },
    {
      id: "3",
      tags: ["kids", "painting"],
      name: "Hebrew",
      time: "2:30",
      cost: 0,
      image: "./lectures/hebrew.jpg",
    },
  ];

  if (filter) {
    const filters = filter.split(",");
    return allLectures.filter((lecture) => {
      return lecture.tags.some((tag) => filters.indexOf(tag) !== -1);
    });
  }
  return allLectures;
};

export const lectureData = (id) => {
  return {
    id: id,
    tags: ["kids", "math"],
    name: "Math for Kids",
    time: "09:00",
    cost: 10,
    image: "./lectures/mathForKids.jpg",
    brif: "Come and see how fun can math be!",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, diam vitae commodo auctor, ex sapien laoreet orci, ac tincidunt erat nisi at erat. Donec id pretium lorem. Vivamus vel tortor interdum, egestas magna at, ultricies lacus. Curabitur suscipit pellentesque lorem, sit amet accumsan justo auctor lobortis. Morbi mollis efficitur tortor a mattis. Integer rutrum neque eu ornare consequat. In pulvinar ullamcorper dolor eu porttitor. Praesent ornare justo nisl, ac malesuada massa vehicula ac. Vivamus vel ipsum sapien.\n\nSed aliquet, elit a tincidunt ullamcorper, erat dui aliquet lorem, sit amet luctus tellus augue non nunc. Curabitur ut congue mi, eu dapibus sapien. Sed tincidunt nisi dignissim lorem vehicula aliquet vitae sit amet sapien. Proin rutrum semper sem ac maximus. Mauris sed ex eleifend, molestie lorem non, imperdiet purus. Sed ullamcorper placerat tristique. Quisque ut sodales libero, vel egestas sapien. Morbi in efficitur orci. In vestibulum mattis elit ac rhoncus.",
    suitableFor: "kids 4-6",
    prerequisite: "Basic grasp of numbers",
    speaker: "Yogev Hadad",
    availability: [3, 10],
    speakerId: "123",
    speakerImage: "speakers/yogev.jpg",
    lectureRating: 3.2,
    numberOfLectureRatings: 10,
    speakerRating: 4,
    numberOfSpeakersRatings: 50,
  };
};

export const login = (email, password) => {
  return {
    status: "SUCCESS",
    userData: {
      email: email,
    },
    session: {
      token: 123,
    },
  };
};

export const register = ({ email, password }) => {
  return {
    status: "SUCCESS",
  };
};

export const sendForgotPasswordEmail = ({ email }) => {
  return {
    status: "SUCCESS",
  };
};

export const fetchSession = (token) => {
  return {
    user: {
      userId: 111,
      username: "yogev83",
    },
  };
};

export const userLectures = (userId) => {
  return {
    status: "SUCCESS",
    lectures: [
      {
        id: "0",
        tags: ["programming"],
        name: "Basics of JavaScript",
        time: "12:00",
        cost: 10,
        image: "./lectures/basicsJS.jpg",
      },
      {
        id: "1",
        tags: ["kids", "math"],
        name: "Math for Kids",
        time: "09:00",
        cost: 10,
        image: "./lectures/mathForKids.jpg",
      },
    ],
  };
};

// Last updated date and time
const lastModifiedDate = document.querySelector("#last-modified-date");
document.getElementById("lastModified").innerHTML = document.lastModified;

const navButton = document.querySelector("#nav-button");
const navigation = document.querySelector("nav");


// Open and close navigation
navButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");

    navButton.setAttribute("aria-expanded", isOpen);
});


// Keep navigation state correct when resizing
function checkScreenSize() {

    if (window.innerWidth >= 768) {

        // Desktop: navigation is always visible
        navigation.classList.add("show");

        navButton.style.display = "none";

    } else {

        // Mobile: navigation is controlled by hamburger
        navigation.classList.remove("show");

        navButton.style.display = "block";

        navButton.setAttribute("aria-expanded", "false");
    }
}


// Run when page loads
checkScreenSize();


// Run whenever browser is resized
window.addEventListener("resize", checkScreenSize);


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseList = document.querySelector('#courseList');
const totalCredits = document.querySelector('#totalCredits');

function displayCourses(courseArray) {
    courseList.innerHTML = '';

    courseArray.forEach(course => {
        const courseCard = document.createElement('li');

        courseCard.classList.add('course-card');

        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} credits</p>
        `;

        courseList.appendChild(courseCard);
    });

    const credits = courseArray.reduce(
        (total, course) => total + course.credits,
        0
    );

    totalCredits.textContent = `The total credits for courses listed above is ${credits}`;
}

function filterCourses(subject) {
    if (subject === 'ALL') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(
            course => course.subject === subject
        );

        displayCourses(filteredCourses);
    }
}

document.querySelector('#allBtn').addEventListener('click', () => {
    filterCourses('ALL');
});

document.querySelector('#cseBtn').addEventListener('click', () => {
    filterCourses('CSE');
});

document.querySelector('#wddBtn').addEventListener('click', () => {
    filterCourses('WDD');
});

// Display all courses when the page first loads
displayCourses(courses);

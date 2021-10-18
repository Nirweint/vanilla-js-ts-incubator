test("should take old men older then 90", () => {
    const ages = [19, 8, 20, 22, 1, 100, 19, 14];

    const oldAges = ages.filter(ages => ages > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test("should take courses cheaper than 160", () => {
    const courses = [
        {title: "css", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150},
    ]

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].price).toBe(110);
    expect(cheapCourses[0].title).toBe("css");

})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Cheese", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ];

    const completedTasks = tasks.filter( task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe("Milk");
    expect(completedTasks[0].isDone).toBeTruthy();
})
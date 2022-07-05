export default class Todo {
    constructor(title, date, urgency, projectIndex) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.time = time;
        this.urgency = urgency;
        this.projectIndex = projectIndex;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    };
};
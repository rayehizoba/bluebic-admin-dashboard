import { observable, action, extendObservable, computed } from 'mobx';
import dashboard from '../assets/dashboard.svg';
import student from '../assets/student.svg';
import sms from '../assets/sms.svg';
import book from '../assets/book.svg';
import employees from '../assets/employees.svg';
import list from '../assets/list.svg';
import parents from '../assets/parents.svg';
import people from '../assets/people.svg';
import reportCards from '../assets/report-cards.svg';
import finance from '../assets/finance.svg';
import event from '../assets/event.svg';

class School {
  constructor(name, active) {
    extendObservable(this, { name, active });
  }
}

class UiStore {
  constructor() {
    this.schools.push(new School('Handmaid\'s International', true));
    this.schools.push(new School('Holy Infant College', false));
    this.schools.push(new School('Great Delight Schools', false));
  }

  sidebarItems = observable([
    { icon: dashboard, name: 'DashBoard', dropdown: false },
    { icon: student, name: 'Students', dropdown: true },
    { icon: employees, name: 'Employees', dropdown: true },
    { icon: parents, name: 'Guardians', dropdown: false },
    { icon: list, name: 'Attendance', dropdown: true },
    { icon: finance, name: 'Finance', dropdown: true },
    { icon: book, name: 'Subjects', dropdown: false },
    { icon: people, name: 'Batches', dropdown: false },
    { icon: reportCards, name: 'Report Cards', dropdown: false },
    { icon: sms, name: 'SMS', dropdown: false },
    { icon: event, name: 'Events', dropdown: true },
  ]);

  showAccountWidget = observable.box(false);

  toggleAccountWidget = action(() => {
    this.showAccountWidget.set(!this.showAccountWidget.get());
  });

  schools = observable([]);

  setActiveSchool = action(school => {
    this.schools.forEach(s => {
      s.active = s.name === school.name
    });
  });

  activeSchool = computed(() => this.schools.find((s) => s.active));
}
const store = new UiStore();
export default store;
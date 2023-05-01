import dateContainer from './querySelectors/date-container.js';
import { DateTime } from './luxon/src/luxon.js';

const displayTime = () => {
  let completeDateAndTime = '';

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  completeDateAndTime += month[DateTime.now().c.month - 1];
  completeDateAndTime += ' ';
  if (DateTime.now().c.day > 3) {
    completeDateAndTime += `${DateTime.now().c.day}th`;
  }
  if (DateTime.now().c.day === 3) {
    completeDateAndTime += `${DateTime.now().c.day}rd`;
  }
  if (DateTime.now().c.day === 2) {
    completeDateAndTime += `${DateTime.now().c.day}nd`;
  }
  if (DateTime.now().c.day === 1) {
    completeDateAndTime += `${DateTime.now().c.day}st`;
  }
  completeDateAndTime += ' ';
  completeDateAndTime += DateTime.now().c.year;
  completeDateAndTime += ',  ';
  completeDateAndTime += DateTime.now().c.hour;
  completeDateAndTime += ':';
  if (DateTime.now().c.minute < 10) {
    completeDateAndTime += '0';
  }
  completeDateAndTime += DateTime.now().c.minute;
  completeDateAndTime += ':';
  if (DateTime.now().c.second < 10) {
    completeDateAndTime += '0';
  }
  completeDateAndTime += DateTime.now().c.second;
  completeDateAndTime += ' ';
  completeDateAndTime += DateTime.now().c.hour > 12 ? 'pm' : 'am';

  dateContainer.innerText = completeDateAndTime;
};

export default displayTime;
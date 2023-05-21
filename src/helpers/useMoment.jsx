import moment from 'moment/moment'

const getCurrentTimeStamp = timeFormat => moment().format(timeFormat);

export default getCurrentTimeStamp;